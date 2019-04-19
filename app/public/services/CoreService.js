'use strict'
var CoreService = angular.module('CoreService', []);
CoreService.service('Core', function ($http, $q) {
    var CoreService = {};

    /** CONFIG **/
    var SIGNALING_SERVER = "https://hub-io.firebaseapp.com/";
    var USE_AUDIO = true;
    var USE_VIDEO = true;
    var DEFAULT_CHANNEL = 'public-channel';
    var MUTE_AUDIO_BY_DEFAULT = false;

    /** You should probably use a different stun server doing commercial stuff **/
    /** Also see: https://gist.github.com/zziuni/3741933 **/
    var ICE_SERVERS = [{
        url: "stun:stun.l.google.com:19302"
    }];
    var signaling_socket = null; /* our socket.io connection to our webserver */
    var local_media_stream = null; /* our own microphone / webcam */
    var peers = {}; /* keep track of our peer connections, indexed by peer_id (aka socket.io id) */
    var peer_media_elements = {}; /* keep track of our <video>/<audio> tags, indexed by peer_id */



    // Start Signal Connection ----------------------------------------
    CoreService.CreateSignalRoom = function (data) {

    }


    // take a snapshot ------------------------------------------------
    CoreService.TakeSnaphot = function () {
        var profilePicCanvas = document.getElementById('profilePicCanvas');
        var profilePictureOutput = document.getElementById('profilePictureOutput');
        var camera = document.getElementById('mineside');
        var width = 240; // Desired width of the profile picture;
        var height = 240; // Calculated later based on image ratio;
        var context = profilePicCanvas.getContext('2d');
        context.drawImage(camera, 0, 0, width, height);
        var data = profilePicCanvas.toDataURL('image/png');
        profilePictureOutput.setAttribute('src', data);
    }


    // to capture audio and video -------------------------------------
    CoreService.CaptureAudioAndVideo = function (constraint, callback) {
        if (constraint == null) {
            var custom = {
                audio: true,
                video: {
                    mandatory: {
                        minWidth: 640,
                        maxWidth: 640,
                        minHeight: 360,
                        maxHeight: 480
                    }
                }
            };
            constraint = custom;
        }
        var IsChrome = globe.IsChrome();
        if (!IsChrome) {
            console.log("not chrome")
            navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
                callback(stream, 'success');
            }).catch(function (error) {
                callback(null, 'failed')
            });
        } else {
            navigator.getUserMedia(constraint, onSuccess, onError);

            function onSuccess(stream) {
                callback(stream, 'success');
            };

            function onError(error) {
                callback(null, 'error')
                console.log("Error with GetUserMedia");
            }
        }
    }

    CoreService.GetCameraAndAudioSources = function (idvideo, idaudio) {

        // FireFox--------------------------------------------------------------------------------
        /*
        if (typeof MediaStreamTrack === 'undefined' || typeof MediaStreamTrack.getSources === 'undefined') {
            document.querySelector("#cameraSelector").style.visibility = "hidden";
        } else {
            MediaStreamTrack.getSources(getCameras);
        }
        */

        var cam = document.getElementById(idvideo);
        var aud = document.getElementById(idaudio);
        navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

        function gotDevices(sourceInfos) {
            for (var i = 0; i !== sourceInfos.length; i++) {
                var source = sourceInfos[i];
                var optionvideo = document.createElement('option');
                var optionaudio = document.createElement('option');
                optionvideo.value = source.deviceId;

                if (source.kind === 'videoinput') {
                    optionvideo.text = source.label || 'camera' + (cam.length + 1);
                    cam.appendChild(optionvideo);
                }

                if (source.kind === 'audioinput') {
                    optionaudio.text = source.label || 'microphone' + (aud.length + 1);
                    aud.appendChild(optionaudio)
                }

            }
        }

        function handleError(error) {
            console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        }
    }


    CoreService.PauseAudioAndVideo = function (id) {
        document.getElementById(id).pause();
    }

    CoreService.DoGrayFilter = function (id) {
        document.getElementById(id).className = "grayscale_filter";
    }

    return CoreService;
});