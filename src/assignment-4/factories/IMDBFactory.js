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

    /*4.1 | create another $http request
        create another $http request but this time call for a d etail view with a different parameter
    */


    return this;
}
