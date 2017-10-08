  var todo = angular.module('todo', ['ngRoute', 'ngResource']);

  todo.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	    when('/login', {
	      templateUrl: 'views/login.html', // load this template in the view
	      controller: 'LoginController' // especifies the controller for this view
	    }).
	    when('/todos', {
	      templateUrl: 'views/list.html', // load this template in the view
	      controller: 'ListController' // especifies the controller for this view
	    }).
	    otherwise({
	      redirectTo: '/login'
	    });
  }]);