(function () {

    var movieService = function ($http) {

        return {
            getAll: function () {
                return $http.get("http://localhost:3000/api/movies");
            }
        };
    };

    var module = angular.module("atTheMovies");
    module.factory("movieService", movieService);

}());