angular.module('app').controller('unitCtrl', function($scope, $http) {
    var loadUnit = function() {
        $http.get('http://localhost:3003/api/units/').then(function (response) {
            $scope.units = response.data
        })
    };

    loadUnit();
});
