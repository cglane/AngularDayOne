(function () {


  angular
    .module('scrabble')
    .controller('MainController', function ($scope,MainService) {
      $scope.alertMe = function(){
        MainService.alertMe();
      };
      $scope.scrabbleMap=function(string){
        $scope.answers= MainService.scrabbleMap(string);
        console.log($scope.answers);
      }
    })

})();
