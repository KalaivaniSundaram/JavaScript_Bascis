function hello() {    return "Hello World :)"    }
//console.log(x); ==> ReferenceError: Cannot access 'x' before initialization
//As it is in temporal dead space!!
function reply(phrase) {
    return phrase;
  }
  
let x = reply('How do you do?');
console.log(x);


var addFun = function addition(num1, num2) {
    console.log(num1+num2);
}

var subFun = (num1, num2) => {
    console.log(num1 - num2);
}

var mulFun = (num1, num2) => {
    console.log(num2*num1);
}

addFun(454, 77);
subFun(999, 99);
mulFun(999, 99);

function greet() { return 'Haydo!'; }

var salutation = greet();

console.log( test = hello() );

console.log(salutation);