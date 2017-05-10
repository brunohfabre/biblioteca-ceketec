angular.module('app').controller('loanCtrl', function($scope, $http, $stateParams) {
    $scope.bookId = $stateParams.bookId;

    var loadStudent = function() {
        $http.get('http://localhost:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    $scope.addLoan = function(student) {
        var startDate = new Date();
        var endDate = startDate.setDate(startDate.getDate + 7);
        var loan = {
            _student: student,
            _book: $stateParams.bookId,
            start_date: startDate,
            end_date: endDate,
        };
        $http.post('http://localhost:3003/api/loans/', student).then(function (response) {
            loadStudent();
        });
    };

    loadStudent();
});
