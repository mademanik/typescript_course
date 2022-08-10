function getData(value: any) {
  return value;
}

// generic
function myData<T>(value: T): T {
  return value;
}

// arror function version
const arrowFuncVersion = <T>(value: T): T => value;

console.log(arrowFuncVersion("Hello").length);
console.log(arrowFuncVersion(123));

