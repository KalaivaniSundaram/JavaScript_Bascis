function x(){

    var a =24;
    return function y(){
        console.log(a);
    }
    a =100;
    //return y;

}
var z = x();
console.log(z);
z();