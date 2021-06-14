function my_func(){
    var arr = [99,22,16,9];

    var new_arr = arr.map(Math.sqrt);
    console.log(arr.map(
        function (num){
            return num *2;
        }
    ));
    //document.write(new_arr);
    console.log(new_arr);

    arr.map((e) => console.log(e));
   console.log( arr.map((e) =>  e*2 ));
}

my_func();