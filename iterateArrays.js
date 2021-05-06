var my_arr = ['a','b','c','d','e'];
console.log(my_arr.length);
my_arr[101] = 'zzz';
console.log(my_arr.length);


//Basic for loop

for(let i=0;i<my_arr.length;i++){
   console.log(my_arr[i]);
}

for(a in my_arr){
    console.log(a);
    console.log(my_arr[a]);
}

//For in loop -- to iterate over enumurate objects in an arbitrary order

const fruits = {
    a : "apple",
    b : "banana",
    c : "citrus",
    d : "dragon"
};

for(fruit in fruits){
    console.log(fruit);
    console.log(fruits[fruit]);
}

//ForEach => arrow function

var new_array = ["kefi", "toffy", "tofu", "sd"];

new_array.forEach((value) => {
    console.log(value)
});

new_array.forEach((value, index) => {
    console.log("value : " ,value, "index is : ", index );
})
