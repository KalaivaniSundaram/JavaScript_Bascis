var arr = [6,8,2,4,5,6,8,1,3,1];

//console.log(arr);
//console.log(arr.sort());

var nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1]
//console.log(nums);
const distinct_arr = [...new Set(nums)];
//console.log(distinct_arr);
var sort_arr = distinct_arr.sort((a,b) => a-b);
//console.log(sort_arr);
var len = distinct_arr.length;
//console.log(len);

//console.log(sort_arr[len-2]);


// const dis_arr = [... new Set(arr)];
// console.log(dis_arr);



var test = Number(12345);

try {
    console.log(test.split(''));
    console.log(test);
    
} catch (error) {
    console.log(error.message);
    
}
