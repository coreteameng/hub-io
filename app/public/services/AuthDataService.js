'use strict'
var AuthDataService = angular.module('AuthDataService', []);

AuthDataService.service('AuthWrapper', function (AuthToken, $rootScope) {
    var authWrapperService = {};
    authWrapperService.isLoggedIn = function () {
        if (AuthToken.getToken()) {
            return true
        } else {
            return false;
        }
    }
    authWrapperService.getUser = function () {
        if (AuthToken.getToken()) {
            var decrypted = CryptoJS.AES.decrypt(AuthToken.getToken(), $rootScope.secretKey);
            return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        } else {
            $q.reject({
                message: 'User has no token'
            });
        }
    }
    authWrapperService.logout = function () {
        AuthToken.setToken();
    }
    return authWrapperService;
});;

AuthDataService.service('AuthToken', function ($window) {
    var authTokenService = {}
    authTokenService.createToken = function (user) {
        var token = CryptoJS.AES.encrypt(JSON.stringify(user), $rootScope.secretKey);
        return token.toString();
    }
    authTokenService.setToken = function (token) {
        if (token) {
            $window.localStorage.setItem('token', token.toString());
        } else {
            $window.localStorage.removeItem('token');
        }
    }
    authTokenService.getToken = function () {
        return $window.localStorage.getItem('token');
    }
    return authTokenService;
});
AuthDataService.service('AuthInterceptors', function (AuthToken) {
    var interceptorService = {};
    interceptorService.request = function (config) {
        var token = AuthToken.getToken();
        if (token) config.headers['x-access-token'] = token;
        return config;
    }
    return interceptorService;
});