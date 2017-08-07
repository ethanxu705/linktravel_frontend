var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {
    $scope.stationName = "Potong Pasir Stn";
    $scope.buses = [
        {"name":"197", "time":"3"},
        {"name":"225", "time":"3"},
        {"name":"149", "time":"5"},
        {"name":"126", "time":"7"},
        {"name":"57", "time":"12"}
    ];
    $scope.time = new Date();
    $interval(function () {
        $scope.time = new Date();
    }, 1000);
    $scope.pm = 174;
    $scope.temp = 35;
});