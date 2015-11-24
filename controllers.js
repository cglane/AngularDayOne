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
      };
      $scope.definiiton=function(word){
        console.log('ive been clicked');
        MainService.definition(word).success(function(data){
          console.log(data);
        })
      }
    })

})();
