function isEvenFun(element) {    return element%2 === 0;       }

var isEven = (element) => { element%2 === 0}; //arrow function wo return is undefined
var isEven = (element) => { return element%2 === 0};
//not raising ambuguity when 2 functions are in same name
//executes code line by line, single threaded synchronous programming - JS
//in a call stack and returns the recent popped out function value
console.log(isEven(44));

var results = [2,4,6,14,10].every(isEven);
console.log(`I'm from the every callbacck functions ${results}`);



