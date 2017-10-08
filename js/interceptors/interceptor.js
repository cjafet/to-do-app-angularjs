todo.config(['$httpProvider', function($httpProvider) {

  $httpProvider.interceptors.push(function($log, $injector, $location) {
    return({
       request: request,
       requestError: requestError,
       // response: response,
       // responseError: responseError
    });

   function request(config) {    
            var session = localStorage.getItem("session");
            if(!session) {
              $location.path('/login');
            } 
            return config;
    }

    function requestError(rejection) {
        // $log.debug(rejection);
        // return $q.reject(rejection);  
    }
  });

}]);


