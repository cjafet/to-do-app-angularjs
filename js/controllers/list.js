todo.controller('ListController', ['$scope', '$route', '$location', 'Authentication', 'Crud', 'ListApi', 
  function($scope, $route, $location, Authentication, Crud, ListApi) {

      $scope.user = localStorage.getItem("user");
      $scope.visible = false;
      
      // Load Todo Items
      var session = localStorage.getItem("session");

      if (session) {
        Crud.showAll().then(function(data) {
          $scope.items = data.data.data.slice().reverse(); 
        });
      } else {
        $location.path('/login');
      }

      $scope.addItem = function(todo) {
        Crud.addItem(todo);
      };

      $scope.logout = function() {
        Authentication.logout();
        $route.reload();
      };

      $scope.update = function(list) {
        var listObject = {
        id: list._id,
        title: list.title, 
        description: list.description,
        status: list.status
        };
        console.log(listObject);
        ListApi.update({id:list._id}, listObject);
      };

      $scope.delete = function(list) {
        Crud.deleteItem(list);
      };
}]); // LoginController