var fullName = "Kalaivani";
console.log("Welcome Babyy!!")
var courseName = "Javascript Bascis";

var isLoggedIn = false;

var loggedCount = 44;

var paymentMode;

paymentMode = "CreditCard";

console.log("paymentMode");

var input = "Feb 3, 1987 12:34:56:789";
var date = new Date(input);
let day = date.getDay();

console.log("The day is : : :",date.getDay());

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        break;
}