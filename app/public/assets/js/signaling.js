var signal = {};

/** CONFIG **/
var SIGNALING_SERVER = "http://localhost";
var USE_AUDIO = false;
var USE_VIDEO = true;
var DEFAULT_CHANNEL = 'some-global-channel-name';
var MUTE_AUDIO_BY_DEFAULT = false;

/** You should probably use a different stun server doing commercial stuff **/
/** Also see: https://gist.github.com/zziuni/3741933 **/
var ICE_SERVERS = [{
    urls: "stun:stun.l.google.com:19302"
}, {
    urls: 'turn:numb.viagenie.ca:3478',
    credential: 'Hk5967245.', //your  password
    username: 'coreteameng@email.com'
}];
var signaling_socket = null; /* our socket.io connection to our webserver */
var local_media_stream = null; /* our own microphone / webcam */
var peers = {}; /* keep track of our peer connections, indexed by peer_id (aka socket.io id) */
var peer_media_elements = {}; /* keep track of our <video>/<audio> tags, indexed by peer_id */

DEFAULT_CHANNEL = 'room-2';
console.log("Connecting to signaling server");
signaling_socket = io();
signaling_socket.on('connect', function () {

    if (!("mediaDevices" in navigator) || !("RTCPeerConnection" in window)) {
        alert("Sorry, your browser does not support WebRTC.");
        return;
    } else {
        setup_local_media(function () {
            console.log("Connected to signaling server");
            /* once the user has given us access to their
             * microphone/camcorder, join the channel and start peering up */
            join_chat_channel(DEFAULT_CHANNEL, {
                'whatever-you-want-here': 'stuff'
            });
        });
    }





});
signaling_socket.on('disconnect', function () {
    console.log("Disconnected from signaling server");
    /* Tear down all of our peer connections and remove all the
     * media divs when we disconnect */
    for (peer_id in peer_media_elements) {
        peer_media_elements[peer_id].remove();
    }
    for (peer_id in peers) {
        peers[peer_id].close();
    }
    peers = {};
    peer_media_elements = {};
});

function join_chat_channel(channel, userdata) {
    signaling_socket.emit('join', {
        "channel": channel,
        "userdata": userdata
    });
}

/** 
 * When we join a group, our signaling server will send out 'addPeer' events to each pair
 * of users in the group (creating a fully-connected graph of users, ie if there are 6 people
 * in the channel you will connect directly to the other 5, so there will be a total of 15 
 * connections in the network). 
 */
signaling_socket.on('addPeer', function (config) {
    console.log('Signaling server said to add peer:', config);
    var peer_id = config.peer_id;
    if (peer_id in peers) {
        /* This could happen if the user joins multiple channels where the other peer is also in. */
        console.log("Already connected to peer ", peer_id);
        return;
    }

    var peer_connection = new RTCPeerConnection({
            "iceServers": ICE_SERVERS
        }, {
            "optional": [{
                "DtlsSrtpKeyAgreement": true
            }]
        }
        /* this will no longer be needed by chrome
         * eventually (supposedly), but is necessary 
         * for now to get firefox to talk to chrome */
    );
    peers[peer_id] = peer_connection;

    peer_connection.onicecandidate = function (event) {
        if (event.candidate) {
            signaling_socket.emit('relayICECandidate', {
                'peer_id': peer_id,
                'ice_candidate': {
                    'sdpMLineIndex': event.candidate.sdpMLineIndex,
                    'candidate': event.candidate.candidate
                }
            });
        }
    }


    for (const track of stream.getTracks()) {
        peer_connection.addTrack(track, stream);
    }

    peer_connection.ontrack = function (event) {
        console.log("on track", event);
        document.getElementById('otherside').srcObject = event.streams[0];
    }

    /* Add our local stream */
    console.log('local_media_stream after ontrack', local_media_stream);
    peer_connection.addStream(local_media_stream);

    /* Only one side of the peer connection should create the
     * offer, the signaling server picks one to be the offerer. 
     * The other user will get a 'sessionDescription' event and will
     * create an offer, then send back an answer 'sessionDescription' to us
     */
    if (config.should_create_offer) {
        console.log("Creating RTC offer to ", peer_id);
        peer_connection.createOffer(
            function (local_description) {
                console.log("Local offer description is: ", local_description);
                peer_connection.setLocalDescription(local_description,
                    function () {
                        signaling_socket.emit('relaySessionDescription', {
                            'peer_id': peer_id,
                            'session_description': local_description
                        });
                        console.log("Offer setLocalDescription succeeded");
                    },
                    function () {
                        Alert("Offer setLocalDescription failed!");
                    }
                );
            },
            function (error) {
                console.log("Error sending offer: ", error);
            });
    }
});


/** 
 * Peers exchange session descriptions which contains information
 * about their audio / video settings and that sort of stuff. First
 * the 'offerer' sends a description to the 'answerer' (with type
 * "offer"), then the answerer sends one back (with type "answer").  
 */
signaling_socket.on('sessionDescription', function (config) {
    console.log('Remote description received: ', config);
    var peer_id = config.peer_id;
    var peer = peers[peer_id];
    var remote_description = config.session_description;
    console.log(config.session_description);

    var desc = new RTCSessionDescription(remote_description);
    var stuff = peer.setRemoteDescription(desc,
        function () {
            console.log("setRemoteDescription succeeded");
            if (remote_description.type == "offer") {
                console.log("Creating answer");
                peer.createAnswer(
                    function (local_description) {
                        console.log("Answer description is: ", local_description);
                        peer.setLocalDescription(local_description,
                            function () {
                                signaling_socket.emit('relaySessionDescription', {
                                    'peer_id': peer_id,
                                    'session_description': local_description
                                });
                                console.log("Answer setLocalDescription succeeded");
                            },
                            function () {
                                Alert("Answer setLocalDescription failed!");
                            }
                        );
                    },
                    function (error) {
                        console.log("Error creating answer: ", error);
                        console.log(peer);
                    });
            }
        },
        function (error) {
            console.log("setRemoteDescription error: ", error);
        }
    );
    console.log("Description Object: ", desc);

});

/**
 * The offerer will send a number of ICE Candidate blobs to the answerer so they 
 * can begin trying to find the best path to one another on the net.
 */
signaling_socket.on('iceCandidate', function (config) {
    var peer = peers[config.peer_id];
    var ice_candidate = config.ice_candidate;
    peer.addIceCandidate(new RTCIceCandidate(ice_candidate));
});


/**
 * When a user leaves a channel (or is disconnected from the
 * signaling server) everyone will recieve a 'removePeer' message
 * telling them to trash the media channels they have open for those
 * that peer. If it was this client that left a channel, they'll also
 * receive the removePeers. If this client was disconnected, they
 * wont receive removePeers, but rather the
 * signaling_socket.on('disconnect') code will kick in and tear down
 * all the peer sessions.
 */
signaling_socket.on('removePeer', function (config) {
    console.log('Signaling server said to remove peer:', config);
    var peer_id = config.peer_id;
    if (peer_id in peer_media_elements) {
        peer_media_elements[peer_id].remove();
    }
    if (peer_id in peers) {
        peers[peer_id].close();
    }

    delete peers[peer_id];
    delete peer_media_elements[config.peer_id];
});





/***********************/
/** Local media stuff **/
/***********************/
async function setup_local_media(callback, errorback) {
    if (local_media_stream != null) {
        /* ie, if we've already been initialized */
        if (callback) callback();
        console.log("local_media_stream not null");
        return;
    }
    const constraints = window.constraints = {
        audio: USE_AUDIO,
        video: USE_VIDEO
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        handleError(e);
    }



    function handleSuccess(stream) {
        const video = document.getElementById('mineside');
        const videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log(`Using video device: ${videoTracks[0].label}`);
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
        local_media_stream = stream;


        if (callback) callback();

    }

    function handleError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            let v = constraints.video;
            errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
            if (error) errorback();
        } else if (error.name === 'PermissionDeniedError') {
            errorMsg('Permissions have not been granted to use your camera and ' +
                'microphone, you need to allow the page access to your devices in ' +
                'order for the demo to work.');
        }
        errorMsg(`getUserMedia error: ${error.name}`, error);
    }

    function errorMsg(msg, error) {
        console.log(msg);
        if (typeof error !== 'undefined') {
            console.error(error);
        }
    }
}