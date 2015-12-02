(function () {
  "use strict";
  angular
    .module('scorecard')
    .factory('ScoreCardServices',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';
    var  scoreObject= function(word){
        var localArray = [];
        for (var i = 0; i < word.length; i++) {
          var score = scores(word[i]);
          var letter = word[i];
          var obj ={
            letter:word[i],
            score:scores(word[i])
          }

          localArray.push(obj);
        };
        return localArray;
      };
      var scores = function(word){
        var currentScore = 0;
        _.each(word,function(el){
          _.each(el,function(letter){
            switch(letter){
            case "a": currentScore+=1;
            break;case "b":currentScore+=3;
            break;case "c":currentScore+=3;
            break;case "d":currentScore+=2;
            break;case "e":currentScore+=1;
            break;case "f":currentScore+=4;
            break;case "g":currentScore+=2;
            break;case "h":currentScore+=4;
            break;case "i":currentScore+=1;
            break;case "j":currentScore+=8;
            break;case "k":currentScore+=5;
            break;case "l":currentScore+=1;
            break;case "m":currentScore+=3;
            break;case "n":currentScore+=1;
            break;case "o":currentScore+=1;
            break;case "p":currentScore+=3;
            break;case "q":currentScore+=10;
            break;case "r":currentScore+=1;
            break;case "s":currentScore+=1;
            break;case "t":currentScore+=1;
            break;case "u":currentScore+=1;
            break;case "v":currentScore+=4;
            break;case "w":currentScore+=4;
            break;case "x":currentScore+=8;
            break;case "y":currentScore+=4;
            break;case "z":currentScore+=10;
            break;
            default: 0
            break;
         }
          });
        });
        return currentScore;
      };
      return{
        scoreObject:scoreObject,
      };
    });
})();
