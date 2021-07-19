function testx(){

    var a =24;
    return function testy(){
        console.log(a);
    }
    a =100;
    //return y; 

}
var testz = testx();
console.log(testz); //refrenece to that variable of a prsists. 
testz();

//vera level of closure

function z(){
    var a = 999;
    function x(){
        var b = 9999;
        console.log(a , "from x called inside z");
        function y() {
            console.log(a,b, "from y called from x");
        } 
        y();
    }
    x();
}
z();