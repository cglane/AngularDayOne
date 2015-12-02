(function () {
  "use strict";
  angular
    .module('scrabble')
    .directive('search', function () {
      return {
        restrict: 'EA',
        templateUrl: 'main/views/directive.html',
        link: function (scope, element, attributes) {
          element.css('color','#60B9CE');
          element.hover(
            function(){
              $(this).css('color','red');
              $(this).append('<span>Click Me</span');
            },
            function(){
              $(this).css('color','#60B9CE');
              $( this ).find( "span:last" ).remove();
            }
          )

        }
      };
    });

})();
