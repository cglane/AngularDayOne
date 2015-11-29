(function () {
  angular
    .module('focus')
    .controller('FocusController', function ($scope,FocusService,$routeParams) {
      console.log('routeParams',$routeParams.focusId);
      $scope.currentWord = $routeParams.focusId;
      $scope.score = FocusService.scores($routeParams);
      FocusService.definition($routeParams.focusId).success(function(data){
        console.log('data',data)
        $scope.definitions = data;
      });
      $scope.onAddSearch = function(word){
        FocusService.getLikedWords().success(function(data){
          FocusService.containsWord(data,word);
        });

        };
    });
})();
