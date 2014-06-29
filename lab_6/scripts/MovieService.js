(function () {

    var movieService = function ($http) {

        return {
            getAll: function () {
                return $http.get("http://localhost:8080/api/movies");
            },
            save: function (movie) {
                return $http.put("http://localhost:8080/api/movies", movie);
            }
        };
    };

    var module = angular.module("atTheMovies");
    module.factory("movieService", movieService);

}());