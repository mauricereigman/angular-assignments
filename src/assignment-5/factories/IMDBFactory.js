angular
    .module('MovieFinder')
    .factory('IMDBService', IMDBService);

function IMDBService($http) {
    this.getMovies = function (searchQuery) {
        return $http({
            method: 'GET',
            params: {
                s: searchQuery
            },
            url: 'http://www.omdbapi.com/'
        }).then(function successCallback(response) {
            return response.data.Search;
        }, function errorCallback(response) {
            alert('er is helaas iets fout gegaan');
        });
    };

    this.getMovieDetail = function (searchQuery) {
        return $http({
            method: 'GET',
            params: {
                i: searchQuery
            },
            url: 'http://www.omdbapi.com/'
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            alert('er is helaas iets fout gegaan');
        });
    };


    return this;
}
