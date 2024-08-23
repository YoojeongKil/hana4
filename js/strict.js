"use strict";

var aaa = 1;
console.log("🚀  aaa11:", aaa);
console.log("🚀  aaa-go:", globalThis.aaa, this);
// delete aaa;
// console.log('🚀  aaa22:', aaa);

function f(a, ax) {
  console.log("outer f", a);
}

// NaN = 1;
// console.log('🚀  NaN:', NaN);
f(10);

{
  function f(a) {
    var v;
    {
      const b = 1;
      v = 5;
    }
    console.log("block f", a, v);
    return;
  }
  f(100);
}

// function f(a) {
//   console.log('**********', a);
// }
f(200);
