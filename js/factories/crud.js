todo.factory('Crud', ['$rootScope', '$http', '$location', '$route', function($rootScope, $http, $location, $route) {
    return {
      showAll: function() {
          var session = localStorage.getItem("session");
          var path = 'http://localhost:3000/todos?sessionId=' + session + '&skip=0&limit=100';
          return $http.get(path).success(function(data) {
            console.log(data);
            authorId = data.data.author;
            console.log(data.data);
            return data;
          });
      },
    	addItem: function(todo) {
		      if(todo) {
            var listObject = {
                  title: todo.title, 
                  description: todo.description,
                  status: "notCompleted"
            };

            var session = localStorage.getItem("session");
            var url = 'http://localhost:3000/todo?sessionId=' + session;

              $http({
                    url: url, 
                    method: 'PUT',
                    data: listObject,
                    headers: {'Content-Type': 'application/json'}
              }).then(function(response) {
                    console.log(response.data);
                    $rootScope.message = "";
                    $route.reload();
              }, function errorCallback(response) {
                    console.log(response);
              });
          } else {
            console.log("ToDo Empty");
            $rootScope.message = "Add title and description!";
          }
    	},
    	deleteItem: function(list) {
    		console.log(list._id);
    		var listObject = {
    		id:list._id
    		};

    		var session = localStorage.getItem("session");
    		var url = 'http://localhost:3000/todo?sessionId=' + session;
    		$http({
    		      url: url, 
    		      method: 'DELETE',
    		      data: listObject,
    		      headers: {'Content-Type': 'application/json'}
    		}).then(function(response) {
    		      var res = response.data;
    		      console.log(res);
    		      $route.reload();
    		}, function errorCallback(response) {
    		      console.log(response);
    		});
    	} // method
    }; // object return
}]); // factory