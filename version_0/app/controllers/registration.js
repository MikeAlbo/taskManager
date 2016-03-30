taskManager.controller('RegistrationController', ['$scope', function($scope){
    
    
    $scope.login = function(){
        $scope.message = "Welcome " + $scope.user.email;
    };
    
    $scope.register = function(){
        $scope.message = "Thank you for registering " + $scope.user.firstName;
    }
    
}]);