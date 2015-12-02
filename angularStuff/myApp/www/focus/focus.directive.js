(function () {
  "use strict";
  angular
    .module('focus')
    .directive('focus', function () {
      return {
        restrict: 'EA',
        templateUrl: 'focus/views/focus.directive.html',
        link: function (scope, element, attributes) {
          element.css({
            color:'#60B9CE'
          });
          element.mouseover(
            function(){
              $(this).css('color','red');
            },
            function(){
              $(this).css('color','#60B9CE');
            }
          );
          element.on('click', function (evt) {
            console.log(element);
            window.glob = element;
            element.off('mouseover');
            element.css({
              background:'#60B9CE',
              color:'green',
              fontSize:'8em',
            });
          });
        }
      };
    });

})();
