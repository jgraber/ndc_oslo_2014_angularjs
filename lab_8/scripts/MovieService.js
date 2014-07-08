(function () {

    var module = angular.module("atTheMovies.data", []);
    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var url;

            this.setRootUrl = function (newUrl) {
                url = newUrl;
            };

            this.$get = function ($http, $q, $timeout) {

                var movies = null;

                return {

                    getById: function(id) {
                        return $http.get(url + "/" + id)
                                    .then(function(response) {
                                        return response.data;
                                    });
                    },

                    getAll: function () {

                        if (movies) {
                            return $q.when(movies);
                        } else {

                            return $http.get(url)
                                .then(function (response) {
                                    movies = response.data;
                                    return movies;
                                });
                        }
                    },
                    save: function (movie) {
                        movies = null;
                        return $http.put(url, movie);
                    }
                };
            };

        });
    });
}());