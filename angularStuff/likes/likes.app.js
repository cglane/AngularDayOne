(function () {
  "use strict";
  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });
  angular
    .module('likes', [
      'ngRoute',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/likes', {
          templateUrl: 'likes/views/likes.html',
          controller: 'LikesController'
        })
    });



})();
