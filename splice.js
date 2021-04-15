var fruits = ["apple", "oranges", "grapes", "berries", "banana",
              "peach", "mango", "prunes", "melon", "coconut"]

console.log(fruits.slice(2,5));
console.log(fruits.slice(1,6));

fruits.splice(2,5, "Kefi");
console.log(fruits);
/*  Warning while logging array and spliced array */
console.log(fruits.splice(2,5, "Kefi")); 
// returns the spliced values => [ 'grapes', 'berries', 'banana', 'peach', 'mango' ] NOT splice array 