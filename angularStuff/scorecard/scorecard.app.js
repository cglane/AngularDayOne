(function () {
  "use strict";

  angular
    .module('scorecard', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/focus/:focusId/scorecard', {
          templateUrl: 'scorecard/views/scorecard.html',
          controller: 'ScoreCardController as scorecardCtrl'
        })
  
    });



})();
