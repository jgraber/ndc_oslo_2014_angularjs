(function () {

    var MoviesController = function ($scope, movieService) {

        var onMovies = function (response) {
            $scope.movies = response.data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        movieService.getAll()
            .then(onMovies, onError);


        $scope.increase = function (movie) {
            movie.rating += 1;
        };

        $scope.decrease = function (movie) {
            movie.rating -= 1;
        };

        $scope.edit = function (movie) {
            $scope.editableMovie = angular.copy(movie);
        }

        $scope.reset = function () {
            $scope.editableMovie = null;
        }

        $scope.update = function (movie)
        {
            movieService
                .save(movie)
                .then(function () {
                    return movieService.getAll();
                })
                .then(function (response) {
                    $scope.movies = response.data;
                    $scope.editableMovie = null;
                })
                .catch(onError);
        }
    };

    var module = angular.module("atTheMovies");
    module.controller("MoviesController",
        ["$scope", "movieService", MoviesController]);

}());
