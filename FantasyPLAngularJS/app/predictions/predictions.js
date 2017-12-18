'use strict';

angular.module('myApp.predictions', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/predictions', {
            templateUrl: 'predictions/predictions.html',
            controller: function ($scope) {

            }
        });
    }])

    .controller('predictCtrl', ["$scope", "$http",
        function ($scope, $http) {
            $scope.stat_headers = ['player_id', 'venue', 'team_goals', 'opposition_goals', 'goals', 'assists',
                'clean_sheets', 'bonus', 'ict_index', 'team_rank', 'opponent_team_rank', 'total_points'];

            $scope.players = [];
            $scope.getPredictions = function () {
                $http({
                    method: 'GET',
                    url: 'http://127.0.0.1:5000/predictions',
                    headers: {'Content-Type': 'application/json'}
                }).then(function createSuccess(response) {
                    $scope.players = response.data;
                    console.log(response)
                });
            };

    }]);

