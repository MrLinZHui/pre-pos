'use strict';

function collectSameElements(collectionA, objectB) {
  var array = [];
  //var array2 = collectionA.key;
  var array1 = objectB.value;
  //console.log("array1："+array1);
  for(var str= 0;str<collectionA.length;str++){
    for(var b = 0;b<array1.length;b++){
      if(collectionA[str].key==array1[b]){
        array.push(collectionA[str].key);
      }
    }
  }
  return array;
}
