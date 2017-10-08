todo.factory('ListApi', ['$resource', function($resource) {
    var session = localStorage.getItem("session");
    return $resource('http://localhost:3000/todo?sessionId=' + session + '/:_id', {id:'@id'}, {
        update: { 
          method: 'PUT'
        },
        save: {
          method: 'PUT'
        }
    });
}]); // factory