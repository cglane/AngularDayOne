(function () {
  "use strict";
  angular
    .module('scrabble')
    .directive('lastSearch', function () {
      return {
        restrict: 'EA',
        templateUrl: 'main/views/lastSearch.directive.html',
        link: function (scope, element, attributes) {
          if(localStorage.getItem('lastSearch')===null||localStorage.getItem('lastSearch')==undefined|| localStorage.getItem('lastSearch')==''){
            element.css('display','none');
          }
        }
      };
    });

})();
