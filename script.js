console.log("Hello World");
const givenWord = "morning"
let userWord = prompt("Enter a word :" + givenWord)
// console.log(userWord)
// let wordTypedValidation = true
// if(givenWord === userWord) {
//     console.log("Great! you typed it right")
// } else {
//     console.log("oops, that wasn't correct")
// }
switch(userWord) {
    case givenWord:
        console.log("Great! you typed it right");
        break;
        case "fag":
        console.log("not accepted");git 
           break;
        case "dork":
        console.log("not accepted");
           break;
        case "idiot":
        console.log("not accepted");
           break;
    default:
        console.log("oops, that wasn't correct");
}