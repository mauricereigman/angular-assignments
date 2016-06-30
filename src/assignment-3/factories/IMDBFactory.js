/*
 assignment 3.0 | Create a factory to handle your $http request
 example 1:
 angular
    .module('YourModule')
        .factory('YourFactoryName', YourFactoryFunction);
        
    function YourFactoryFunction ($http) {
       this.yourRequest = function () {
            return $http.get(...............
       }
       
       return this;
    }
    
    
 example 2:
 angular
     .module('YourModule')
     .factory('YourFactoryName', YourFactoryFunction);

 function YourFactoryFunction ($http) {
     function yourRequest() {
         return $http.get(...............
     }
    
     return yourRequest;
 }
 */