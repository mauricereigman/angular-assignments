angular
    .module('MovieFinder')
    .controller('SearchCtrl', SearchCtrl);

/*
     assignment 2.0 | adding the $http service to our controller
     inject angulars $http service in your controller
     syntax:
         function muFunction($http)
 */
function SearchCtrl ($scope) {
    $scope.searchQuery = "my searchquery";


    /*
        assignment 2.1 | adding the $http service to our controller
        now lets use the $http service to call the Open IMDB movie database
        find the api on this url "http://www.omdbapi.com" ( use the "s" parameter for a movie search )
        when the call is successful add the data to a scope object (same as we did with "$scope.searchQuery") and call it $scope.movies
        syntax:
            $http({
                method: 'GET',
                url: '/someUrl'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    */

    /*
        assignment 2.3 | lets create a function on our $scope that dynamically requests the OMBD api using our "$scope.searchQuery" model as the (query)parameter
        example:
            $scope.getMovies = function () {
                Your $http call to the IMDB server
            }
        Remember: set the $scope.movies object to the results of your query
     */
}
