(function () {

var module = angular.module("atTheMovies",
        ["ngRoute", "atTheMovies.data"]);

    module.config(function ($httpProvider) {

    });

    module.config(function (movieServiceProvider) {
        movieServiceProvider.setRootUrl("http://localhost:8080/api/movies");
    });

    module.config(function($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/list.html",
                controller: "MovieListController"                
            })
            .when("/edit/:id", {                
                templateUrl: "views/edit.html",
                controller: "MovieEditController"
            })
            .when("/:id", {                
                templateUrl: "views/detail.html",
                controller: "MovieEditController"
            })
            .otherwise({                
                redirectTo: "/list" 
            });
    });

    module.run(function ($rootScope) {
        $rootScope.version = "v1.0";
    });

}());