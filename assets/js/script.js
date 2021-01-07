//setting variables for password
var btn = document.getElementById("btn");
var textArea = document.querySelector("#textArea");
//charter types
// var passwordIncludes = "";
// var returnPass = "";
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = upperCaseLetter.toLowerCase();
var numbers = "0123456789";
var symbols = "@%+\\/\'!#$^?:,)(}{][~-_.";

//function to get prompts
btn.addEventListener("click", promptUser);


function promptUser() {
    var charterNumber = prompt("How many characters would you like your password to contain 10 is the minimuim for safe passwords and over 32 is too hard to memorize");
    //reset
//     var passwordIncludes = "";
//    var returnPass = "";

   //if password is out of scope lets restart
if (charterNumber < 10) {
    alert("Please select a higher number. For your security we do not create passwords under 10 characters.");
    return;
} else if (charterNumber > 32) {
confirmNumber(charterNumber);
} else {
    Nextprompts(charterNumber);
}


}

function confirmNumber() {
    if (confirm("Can you memorize a password this long? Please note we are not responsible for forgotten passwords and advise against this length") == true) {
Nextprompts(charterNumber);
    } else {
    return;
}
}
function Nextprompts(charterNumber ) {

var passwordIncludes = "";
var returnPass = "";


  var upperAdd = confirm("Click OK if you'd like to have uppercase letters in your password. Note you have to add some characters.");

  if (upperAdd == true) {

      passwordIncludes += upperCaseLetter;

  

  var lowerAdd = confirm("Click OK if you'd like to have lowercase letters in your password."); 


  if(lowerAdd)
  passwordIncludes += lowerCaseLetter;
   }
   var numberAdd = confirm("Click OK if you'd like to have numbers in your password."); 
  if(numberAdd) {
    passwordIncludes += numbers;
   }
   var symAdd = confirm("Click OK if you'd like to have symbols letters in your password."); 
   if(symAdd) {
     passwordIncludes += symbols;
    }


 // If nothing as added add an alert and sent user back to pick some
 if (!(upperAdd || lowerAdd || symAdd || numberAdd)) {
    alert("Error! Must include at least one character type.");
    Nextprompts();
  } else {
    for (var i = 0; i < charterNumber; i++) {
        returnPass += passwordIncludes.charAt(Math.floor(Math.random() * passwordIncludes.length));
        console.log(returnPass);
    } 
console.log(returnPass);
    // return returnPass;
    var textArea = document.querySelector("#textArea");

    textArea.value = returnPass;

}
}
// function generatePass(passwordIncludes, returnPass, charterNumber) {
//for loop to generate a password

// }


// var promptUser = promptUser();
// btn.addEventListener("click", promptUser);
