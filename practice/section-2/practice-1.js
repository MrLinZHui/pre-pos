'use strict';

function countSameElements(collection) {
  var array=[];
  const map = collection.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
 // console.log(map);
  for (var [key,value] of map) {  
    var object1 ={
      key:key,
      count: value
}
//console.log(object1);
array.push(object1);
}
 // console.log(array);

 return array;
}
