'use strict';

function collectSameElements(collectionA, collectionB) {
  var array = [];
  var array1 = collectionB.value;
  //console.log("array1："+array1);
  for(var str= 0;str<collectionA.length;str++){
    for(var b = 0;b<array1.length;b++){
      if(collectionA[str]==array1[b]){
        array.push(collectionA[str]);
      }
    }
  }
  return array;
}
