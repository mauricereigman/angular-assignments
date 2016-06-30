angular
    .module('MovieFinder')
    .directive('ngMovieBlock', ngMovieSearch);

function ngMovieSearch (IMDBService) {
    return {
        restrict: 'AE',
        scope: {
            movie: '='
        },
        templateUrl: 'directives/ng-movie-block/ng-movie-block.html',
        link: function($scope, $element, $attrs) {
            $scope.getMovieDetail = function () {
                IMDBService.getMovieDetail($scope.movie.imdbID)
                    .then(function (response) {
                        $scope.movieDetail = response.data;
                        console.log($scope.movieDetail);
                    })
            };

            $scope.removeMovieDetail = function () {
                $scope.movieDetail = null;
            }
        }
    }
}

