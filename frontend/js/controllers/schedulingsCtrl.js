angular.module('app').controller('schedulingsCtrl', function($scope, $http, $stateParams) {

    var loadScheduling = function() {
        $http.get('http://localhost:3003/api/schedulings/').then(function (response) {
            $scope.scheduling = {_students: [{}]};
            $scope.schedulings = response.data;
        });
    };

    var loadStudents = function() {
        $http.get('http://localhost:3003/api/students/').then(function (response) {
            $scope.students = response.data;
        });
    };

    $scope.addStudent = function(index) {
        $scope.scheduling._students.splice(index + 1, 0, {});
    };

    $scope.deleteStudent = function(index) {
        if ($scope.scheduling._students.length > 1) {
            $scope.scheduling._students.splice(index, 1);
        }
    };

    $scope.addScheduling = function(scheduling) {
        $http.post('http://localhost:3003/api/schedulings/', scheduling).then(function (response) {
            delete $scope.scheduling;
            console.log(response);
            loadScheduling();
        });
    };

    $scope.deleteScheduling = function(scheduling) {
        $http.delete('http://localhost:3003/api/schedulings/' + scheduling._id).then(function (response) {
            loadScheduling();
        });
    };

    loadScheduling();
    loadStudents();
});
