//setting variables for password
var btn = document.getElementById("btn");

//charter types

var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = upperCaseLetter.toLowerCase();
var numbers = "0123456789";
var symbols = "@%+\\/\'!#$^?:,)(}{][~-_.";

//function to get prompts
btn.addEventListener("click", promptUser);


function promptUser() {
    var charterNumber = prompt("How many characters would you like your password to contain 10 is the minimuim for safe passwords and over 32 is too hard to memorize");
    //blank string scoped locally to reset each time user is prompted 
   var passwordIncludes = "";
   var returnPass = "";

   //if password is out of scope lets restart
if (charterNumber <= 10) {
    alert("Please select a higher number. For your security we do not create passwords under 10 characters.");
    return;
} else if (charterNumber >= 32) {
confirmNumber();
} else {
    Nextprompts();
}


}

function confirmNumber() {
    if (confirm("Can you memorize a password this long? Please note we are not responsible for forgotten passwords and advise against this length") == true) {
Nextprompts();
    } else
    return;
}

// Nextprompts(){
    
// }
var promptUser = promptUser();
btn.addEventListener("click", promptUser);