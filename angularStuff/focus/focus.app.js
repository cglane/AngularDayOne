(function () {
  "use strict";
  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });
    angular
    .module('focus', [
      'ngRoute',
      'underscore',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/focus/:focusId', {
          templateUrl: 'focus/views/focus.html',
          controller: 'FocusController'
        })
    });



})();
