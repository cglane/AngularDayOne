(function () {
  "use strict";
  angular
    .module('focus')
    .factory('FocusService',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';
      var page ={
        onAddSearch:function(word){
          return $http.post(url,word);
        },
        getLikedWords:function(word){
          return $http.get(url);
        },
        containsWord:function(data,word){
                if(!_.contains(data,word)&& word!==undefined){
                  console.log('does not contain',word);
                  var wordObject = {'word':word};
                  page.onAddSearch(wordObject);
              }
        },
        dictionary:function(word){
          var urls="/definition/"+word;
          var urls2 = 'http://api.wordnik.com/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          return $http.get(urls2);
          console.log($http.get(urls2));
        },
        scores:function(word){
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
        },
      };
      return{
        scores: page.scores,
        definition: page.dictionary,
        onAddSearch:page.onAddSearch,
        getLikedWords:page.getLikedWords,
        containsWord:page.containsWord,
      };
    });
})();
