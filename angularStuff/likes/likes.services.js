(function () {
  "use strict";
  angular
    .module('focus')
    .factory('LikesServices',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';
      var getLikes = function(el){
        return $http.get(url);
      };

    return{
    getLikes:getLikes,
  };
    });
})();
