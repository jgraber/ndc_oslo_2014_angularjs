var MoviesController = function ($scope) {

    var movies = [
        { title: "Star Wars", length: 120, released: 1981 },
        { title: "Top Gun", length: 90, released: 1984 },
        { title: "Hot Shots", length: 89, released: 1986 }
    ];

    $scope.movies = movies;

    $scope.increase = function (movie) {
            movie.length += 1;
        };

    $scope.decrease = function (movie) {
        movie.length -= 1;
    };
};