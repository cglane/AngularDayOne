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
      'jquery',
      'focus',
      'likes',
      'scorecard',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/views/main.html',
          controller: 'MainController as mainCtrl'
        })
        .when('/404', {
          templateUrl: 'main/views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    })





})();
