(function () {


  angular
    .module('scrabble')
    .controller('MainController', function ($scope,MainService) {
      $scope.lastSearch = localStorage.getItem('lastSearch');
      $scope.alertMe = function(){
        MainService.alertMe();
      };
      $scope.scrabbleMap=function(string){
        $scope.lastSearch = localStorage.getItem('lastSearch');
        localStorage.setItem("lastSearch",string)
        if(string.length>9){
          alert('too many letters, mainframe crash')
        }else{
        $scope.answers= MainService.scrabbleMap(string);
        console.log($scope.answers);
      }
      };
      $scope.definition=function(word){
        console.log('ive been clicked');
        MainService.definition(word).success(function(data){
          $scope.definitions = data;
          console.log(data[0].text);
        })
      }
    })

})();
