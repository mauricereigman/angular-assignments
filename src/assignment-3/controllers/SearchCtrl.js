angular
    .module('MovieFinder')
    .controller('SearchCtrl', SearchCtrl);

function SearchCtrl ($scope, $http) {
    $scope.searchQuery = "my searchquery";

/*
    assignment 3.1 | inject and use the factory function we created in 3.0 instead of using the $http service in your controller
*/
    $scope.getMovies = function () {
        $http({
            method: 'GET',
            params: {
                s: $scope.searchQuery
            },
            url: 'http://www.omdbapi.com/'
        }).then(function successCallback(response) {
            $scope.movies = response.data.Search;
        }, function errorCallback(response) {
            console.log(response);
        });
    };
}
