(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$log', "$scope", "$http"];
    function RegisterController($log, $scope, $http) {
        var vm = $scope.vm = this;
        vm.input = "";
        vm.doSomething = function () {
            $log.info(vm.input);
        };
    }

})();