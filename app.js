(function () {
  "use strict";

  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });

  angular
    .module('scrabble', [
      'ngRoute',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });




})();
