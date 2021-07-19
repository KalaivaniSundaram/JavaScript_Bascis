const fib = (n) => {
    if(n<=2) return 1;
    return (fib(n-1) + fib(n-2));
}


console.log(fib(3), "normal value of 3");//3
console.log(fib(6), "normal value of 6");//8
//console.log(fib(5));//8
//console.log(fib(6));//13
//console.log(fib(7));//21
//console.log(fib(55));//225351433717

//It took, O(2 power n)


//This dynamic progra, i.e., overlapping of subproblems can be optimized by Memorization/ Memoization.
//As below:

const opt_fib = (n, mem = {}) => {

    if(n in mem) return mem[n];
    if(n<=2) return 1;
    mem[n] = opt_fib(n - 1, mem )+ opt_fib( n - 2, mem);
    return mem[n];

};
console.log(opt_fib(3), "memozied value of 3");
console.log(opt_fib(6), "memozied value of 6");
console.log(opt_fib(7), "memozied value of 7");
console.log(opt_fib(8), "memozied value of 8");
console.log(opt_fib(50), "memozied value of 50");
