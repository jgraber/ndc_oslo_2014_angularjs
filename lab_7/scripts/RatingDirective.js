(function () {

   var module = angular.module("atTheMovies");
    module.directive("ratings", function () {
        return {
            restrict: "AEC",
            templateUrl: "partials/rating.html",
            transclude: true,
            replace: true,
            scope: {
                stars: "="
            }
       };
    });
   
}());