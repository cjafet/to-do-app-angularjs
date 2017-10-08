todo.factory('Authentication', ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {
    return {
        login: function(user, password) {          
            var userObject = {
            username: user, 
            password: password
            };
            var str_user = JSON.stringify(userObject);

            var url = 'http://localhost:3000/user/auth';
            return $http({
                  url: url, 
                  method: 'POST',
                  data: str_user,
                  headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                  console.log(response.data);
                  var session = response.data.sessionId;
                  localStorage.setItem("session", session);
                  return session;
            }, function errorCallback(response) {
                  console.log(response);
            });
        }, // method
        logout: function() {
            localStorage.removeItem("session");
            localStorage.removeItem("user");
            console.log("User logged out!");
        } // method
    }; // object return
}]); // factory