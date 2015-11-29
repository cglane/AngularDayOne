(function () {
  "use strict";

  angular
    .module('scorecard', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/scorecard', {
          templateUrl: 'scorecard/views/scorecard.html',
          controller: 'ScoreCardController'
        })
    });



})();
