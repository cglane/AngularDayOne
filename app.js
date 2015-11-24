(function () {
  "use strict";

  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });
    var jquery = angular.module('jquery', []);
                  jquery.factory('$', function() {
                      return window.$; //Underscore should be loaded on the page
                  });

  angular
    .module('scrabble', [
      'ngRoute',
      'underscore',
      'jquery'
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

    })
    .config(function($httpProvider){
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });




})();
