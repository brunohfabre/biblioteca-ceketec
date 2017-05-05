angular.module('app').controller('studentCtrl', function($scope, $http) {
    var loadStudent = function() {
        $http.get('http://localhost:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    var loadRoom = function() {
        $http.get('http://localhost:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        });
    };

    $scope.addStudent = function(student) {
        $http.post('http://localhost:3003/api/students/', student).then(function (response) {
            delete $scope.student;
            loadStudent();
        });
    };

    $scope.deleteStudent = function(student) {
        $http.delete('http://localhost:3003/api/students/' + student._id).then(function (response) {
            loadStudent();
        });
    };

    loadStudent();
    loadRoom();
});
