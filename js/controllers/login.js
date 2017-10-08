todo.controller('LoginController', ['$scope', '$location', 'Authentication', function($scope, $location, Authentication) {
		
	  	
		session = localStorage.getItem("session");

		if (session) {
			$location.path('/todos');	
		}

	  	$scope.login = function(user) {

		  	var sessionId;
		  	console.log(user);
		  	
		  	var name = user.email;
		  	console.log(name);

		  	Authentication.login(user.email,user.password).then(function(data) {
	      		sessionId = data;
	      		console.log("sessionId:" + data);
	      		if (data) {
	      		    console.log(name);
	      		    localStorage.setItem("user", name);
	      		    $location.path('/todos');
	      		} else {
	      		    $location.path('/login');
	      		    $scope.message = "Wrong username or password";
	      		}
	      	});
	    }; 

	  	$scope.logout = function() {
        	Authentication.logout();
      	}; 

}]); // LoginController