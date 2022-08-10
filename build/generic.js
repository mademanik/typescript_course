"use strict";
function getData(value) {
    return value;
}
// generic
function myData(value) {
    return value;
}
// arror function version
const arrowFuncVersion = (value) => value;
console.log(arrowFuncVersion("Hello").length);
console.log(arrowFuncVersion(123));
