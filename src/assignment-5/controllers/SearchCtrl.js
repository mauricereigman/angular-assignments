angular
    .module('MovieFinder')
    .controller('SearchCtrl', SearchCtrl);

function SearchCtrl($scope, IMDBService) {
    $scope.searchQuery = "my searchquery";

    $scope.getMovies = function () {
        IMDBService.getMovies($scope.searchQuery)
            .then(function (movies) {
                $scope.movies = movies;
            })
    };
}


