(function () {
  angular
    .module('scorecard')
    .controller('ScoreCardController', function ($scope,ScoreCardServices) {
      $scope.score = localStorage.getItem('total');
      $scope.addToTotal = function(number){
      var total =  parseInt(localStorage.getItem("total"));
      var newTotal = total + number;
      localStorage.setItem('total',newTotal)
      console.log('total type',typeof(parseInt(total)));
      $scope.score = localStorage.getItem('total');

    };
      $scope.clearScore=function(){
        var zero = 0;
        localStorage.setItem('total',zero);
        $scope.score = localStorage.getItem('total');
      };
    })
})();
