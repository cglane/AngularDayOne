(function () {
  "use strict";
  angular
    .module('scrabble')
    .factory('MainService',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';

      var page ={
        dictionary:function(word){
          console.log("SRE,", word);
          var dicUrl = 'http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/'+word+'?key=ad64c86b-8c7b-4ef5-859b-0f404c24d0c5';
          $.ajax({
           url: 'http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/'+word+'?key=ad64c86b-8c7b-4ef5-859b-0f404c24d0c5',
           type: 'GET',
           success: function(res) {
               return res;
               console.log(res);
           }
       });
        },
        alertMe:function(){
              console.log("hello everyone!");
        },
        scrabble:function(inputData){
          var arrayOfCombinations =[];
          var combinationArray = page.combinations(inputData);
          _.each(combinationArray,function(el){
            if(_.contains(Englishwords,el)){
              if(!_.contains(arrayOfCombinations,el)){
              arrayOfCombinations.push(el);
              }
            }
          });
            var aMap = page.scores(arrayOfCombinations);
            return aMap;
        },
        scores:function(array){
          var myMap = [];
          _.each(array,function(el){
            var currentScore = 0;
            var word = el;
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
            var obj = {score:currentScore, scrabbleWord: word};
            myMap.push(obj);
            })
            return myMap;
        },
        combinations:function (string)
        {
            var result = [];

            var loop = function (start,depth,prefix)
            {
                for(var i=start; i<string.length; i++)
                {
                    var next = prefix+string[i];
                    if (depth > 0)
                        loop(i+1,depth-1,next);
                    else
                        result.push(next);
                }
            }

            for(var i=0; i<string.length; i++)
            {
                loop(0,i,'');
            }
            var finalArray = result.concat(page.sameLength(string))
            return finalArray;
        },
        sameLength:function(string){
          var array = [];
          for (var i = 0; i < string.length; i++) {
            var shortString = '';
            var removedLetter = string[i];
              for (var p = 0; p < string.length; p++) {
                if(string[p] !==removedLetter){
                  shortString = shortString + string[p];
                }
              }
              for (var j = 0; j < shortString.length; j++) {
                var anotherFnArray = shortString.split("");
                anotherFnArray.splice(j,0,removedLetter);
                var strings = anotherFnArray.join('');
                array.push(strings);
              }
          }
          return array;
        },
      };
      return{
        alertMe:page.alertMe,
        scrabbleMap : page.scrabble,
        definition : page.dictionary,
      };
    })
})();
