const { decodeBinary: d } = require("../src/decode.js");
const cases = [
 ["01001000 01101001","Hi"],["0100100001101001","Hi"],
 ["  01101000 01100101 01101100 01101100 01101111\n","hello"],
 ["1101000 1101001","hi"],
 ["11000011 10101001","é"],["hello",null],["0101",null],["",null],["010010000",null]];
let ok=true;for(const [i,e] of cases){const r=d(i);if(r!==e){ok=false;console.log("FAIL",JSON.stringify(i),r)}}
console.log(ok?"all pass":"failures"); if(!ok) process.exit(1);
