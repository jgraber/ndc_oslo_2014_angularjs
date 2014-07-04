'use strict';

describe("MoviesController", function() {
  beforeEach(module('atTheMovies'));

  var controller;
  var scope;
  var service;
  var httpBackend;

  beforeEach(inject (function ($controller, $rootScope){
    scope = $rootScope.$new();
    controller = $controller('MoviesController', {$scope: scope});
  }));

/* One way to mock:  */

  beforeEach(inject (function ($http, $httpBackend, movieService){
    service = movieService;
    httpBackend = $httpBackend;
    httpBackend.when("GET", "http://localhost:8080/api/movies").respond([{},{}]);
  }));

/*
  it('returns two movies', function(){
    var movies;
    service.getAll().then(function(result){
      movies = result.data;
    });

    httpBackend.flush();
    expect(movies.length).toEqual(2);
  });
 
*/


/* Other way of mocking: */
  var moviesDeferred;
  var movieServiceSpy;
  beforeEach(inject(function ($controller, $rootScope, movieService, $q){
    scope = $rootScope.$new();
    moviesDeferred = $q.defer();
    movieServiceSpy = movieService;
    spyOn(movieServiceSpy, "getAll").and.returnValue(moviesDeferred.promise);
    controller = $controller('MoviesController', 
      {$scope: scope, movieService: movieServiceSpy});
  }))



  it("should be able to create controller", function() {
    expect(controller).toBeTruthy();
  });


  it('fetched movies are added to scope', function(){
    moviesDeferred.resolve({data: [{},{},{},{}]});
    scope.$apply();
    expect(scope.movies.length).toBe(4);
  });


  it('version is set', function(){
    expect(scope.version).toEqual("v1.0");
  });

});
