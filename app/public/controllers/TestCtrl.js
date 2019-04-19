var TestCtrl = angular.module('TestCtrl', []);

TestCtrl.controller('TestController', function ($rootScope, $scope, $location, Core) {

    var vm = this;
    vm.Call = function () {
        var room = "room-1"
        data = {
            room: room
        }
        signal.Start();

        // Core.CreateSignalRoom(data);
    }
});