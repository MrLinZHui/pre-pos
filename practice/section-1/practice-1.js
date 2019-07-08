'use strict';

function collectSameElements(collectionA, collectionB) {
  var array = [];
  for(var str= 0;str<collectionA.length;str++){
    for(var b = 0;b<collectionB.length;b++){
      if(collectionA[str]==collectionB[b]){
        array.push(collectionA[str]);
      }
    }
  }
  return array;
}
