// mods/A.js
import { b } from "./B.js";
import defC, { c } from "./C.js";
export const afn = () => console.log("a.afn!!"); // 이 위치 OK!
console.log("AAAAAAAAAA");
b();
c();
defC();
// export const afn = () => console.log('a.afn!!'); // TDZ Error (uninitialize)
export function afn() {
  console.log("fn.afn");
}
