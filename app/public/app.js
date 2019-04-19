var app = angular.module('app', ['firebase', 'ngRoute', 'LoginCtrl', 'ProfileCtrl', 'TestCtrl', 'IndexCtrl', 'MockDataService', 'CoreService', 'AuthDataService']);


// Environments ------------------------------------------------
app.run(function ($rootScope, $location, $window, AuthWrapper) {
    $rootScope.secretKey = "hub.io28*293471*014*0";
    var firebaseConfig = {
        apiKey: "AIzaSyDqy8x60n9eOZvwgOLdMog-yt5sz3GMSEw",
        authDomain: "hub-io.firebaseapp.com",
        databaseURL: "https://hub-io.firebaseio.com",
        projectId: "hub-io",
        storageBucket: "hub-io.appspot.com",
        messagingSenderId: "211643979755"
    }

    // Connect to Firebase -------------------------------------
    firebase.initializeApp(firebaseConfig);
    $rootScope.dbstore = firebase.firestore();
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        /*
        var IsAuthenticated = next.$$route.authenticated;
        if (IsAuthenticated) {
            if (AuthWrapper.isLoggedIn()) {
                console.log('Success : User is logged in');
                AuthWrapper.getUser().then(function (data) {
                    $rootScope.loggedIn = AuthWrapper.isLoggedIn();
                    $rootScope.username = data.username;
                    $rootScope.email = data.email;
                    console.log(data);
                });
            } else {
                console.log('Failure : User is NOT logged in');
                $location.path('/login');
            }
        }
        */
    });
    $rootScope.$on('$locationChangeStart', function (event, next, current) {});
});



// Routing ----------------------------------------------
app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'LoginController',
            controllerAs: 'login',
            authenticated: false
        })
        .when('/', {
            templateUrl: '../views/test.html',
            controller: 'TestController',
            controllerAs: 'test',
            authenticated: false
        })
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'LoginController',
            controllerAs: 'login',
            authenticated: false
        })
        .when('/profile', {
            templateUrl: '../views/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profile',
            authenticated: true
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});