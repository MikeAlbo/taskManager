var taskManager = angular.module('taskManager', ['ngRoute']);

taskManager.config(['$routeProvider', function($routeProvider){
   $routeProvider.
   when('/login', {
       templateUrl: 'views/user/user_login.html',
       controller: 'RegistrationController'
   }).
   when('/register', {
       templateUrl: 'views/user/user_register.html',
       controller: 'RegistrationController'
   }).
   when('/profile', {
       templateUrl: 'views/user/user_profile.html',
       controller: 'ProfileController'
   }).
   otherwise({
       redirectTo: '/login'
   });
}]);