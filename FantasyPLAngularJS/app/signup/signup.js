'use strict';

angular.module('myApp.signup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: function ($scope) {

            }
        });
    }])

.controller('postCtrl', ["$scope", '$http',
    function ($scope, $http) {

        $scope.submitForm = function () {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/CreateUser',
                data: {email: $scope.email, password: $scope.password},
                headers: {'Content-Type': 'application/json'}
            }).then(function createSuccess(response) {
                console.log(response.data)
            });
        }
    }]);
