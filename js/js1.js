var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $interval, $sce) {
    $scope.stationName = "Potong Pasir Stn";
    $scope.buses = [
        {"name": "149", "time": 5},
        {"name": "197", "time": 3},
        {"name": "126", "time": 7},
        {"name": "36", "time": 15},
        {"name": "225", "time": 3},
        {"name": "57", "time": 12}
    ];
    $scope.time = new Date();
    $interval(function () {
        $scope.time = new Date();
    }, 1000);
    $scope.pm = 174;
    $scope.temp = 35;
    $scope.myURL = $sce.trustAsResourceUrl("http://www.linktravel.com:8090/sense/bus");
    $scope.news = [
        {
            "time": 5,
            "title": "High Court sets out new sentencing framework for NS defaulters",
            "content": "In a written judgment, the court said that the length of sentences should be amplified for those who have defaulted for a longer period of time, to \"reflect the decline in a person's physical fitness with ...",
            "imgUrl":"../img/news1.png"
        },
        {
            "time": 5,
            "title": "High Court sets out new sentencing framework for NS defaulters",
            "content": "In a written judgment, the court said that the length of sentences should be amplified for those who have defaulted for a longer period of time, to \"reflect the decline in a person's physical fitness with ...",
            "imgUrl":"../img/news2.png"
        }
    ]
});

app.filter('range', function(){
    return function(data, from, to){
        var array = [];
        for(var i = from; i <= to && i < data.length; i++){
            array.push(data[i]);
        }
        return array;

    }
})