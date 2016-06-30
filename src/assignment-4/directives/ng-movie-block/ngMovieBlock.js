angular
    .module('MovieFinder')
    .directive('ngMovieBlock', ngMovieSearch);

function ngMovieSearch () {
    return {
        restrict: 'AE',
        scope: {
            movie: '='
        },
        templateUrl: 'directives/ng-movie-block/ng-movie-block.html',
        link: function($scope, $element, $attrs) {
             /*assignment 4.2 | click for detail
                create a function that triggers when the element with class "movie-block" is clicked (TIP!: use ng-click in our ng-movie-block.html)
                in your function make a request to the IMDBService factory for a detail search for the movie that has been clicked(just like in your controller). 
                add the data to a scope object in this directive
             */
        }
    }
}

