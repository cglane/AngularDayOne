(function () {
  angular
    .module('likes')
    .controller('LikesController', function ($scope,LikesServices) {
      LikesServices.getLikes().success(function(data){
        $scope.data = data;
      })
    })
})();
