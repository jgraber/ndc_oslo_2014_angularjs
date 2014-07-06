(function() {

    var app = angular.module("atTheMovies");

    app.controller("MovieEditController", function (
                    $scope, $routeParams, movieService, $location) {
        var movieId = $routeParams.id;

        var onError = function(reason) {
            $scope.error = reason;
        };

        var onMovie = function(movie) {
            $scope.editableMovie = movie; 
        };

        movieService.getById(movieId)
            .then(onMovie, onError);
            
        $scope.save = function (movie) {
            movieService
                .save(movie)
                .then(function() {
                    $location.path("#/list");
                })
                .catch(onError);
        };

        $scope.cancelEdit = function () {
            $location.path("#/list");
        };
    });

}());