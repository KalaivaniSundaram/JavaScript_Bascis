function getLetter(s) {
    var letter;
    // Write your code here
    
    //const chars = [...s];
    var regexA = /[aeiou]/,
        regexB = /[bcdfg]/,
        regexC = /[hjklm]/,
        regexD = /[npqrstvwxyz]/;
    
    switch(true){
        case regexA.test(s):
            letter = 'A';
            console.log(letter);
            break;
            //return letter;
        case regexB.test(s):
            letter = 'B';
            //return letter;
            break;
        case regexC.test(s):
            letter = 'C';
            //return letter;
            break;
        case regexD.test(s):
            letter = 'D';
            //return letter;
            break;
        default:
            break;
    }
    
    return letter;
}



// var regex1 = /a/,
//     regex2 = /b/,
//     regex3 = /c/,
//     samplestring = 'b';

// switch (true) {
//     case regex1.test(samplestring):
//         console.log("regex1");
//         break;
//     case regex2.test(samplestring):
//         console.log("regex2");
//         break;
//     case regex3.test(samplestring):
//         console.log("regex3");
//         break;
//}

var alpha = getLetter("adfgt");
console.log(alpha);