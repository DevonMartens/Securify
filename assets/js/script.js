//setting variables for password
var btn = document.getElementById("btn");

//charter types
var passwordIncludes = "";
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = upperCaseLetter.toLowerCase();
var numbers = "0123456789";
var symbols = "@%+\\/\'!#$^?:,)(}{][~-_.";

//function to get prompts
btn.addEventListener("click", promptUser);


function promptUser() {
    var charterNumber = prompt("How many characters would you like your password to contain 10 is the minimuim for safe passwords and over 32 is too hard to memorize");
    //blank string scoped locally to reset each time user is prompted 

   var returnPass = "";

   //if password is out of scope lets restart
if (charterNumber < 10) {
    alert("Please select a higher number. For your security we do not create passwords under 10 characters.");
    return;
} else if (charterNumber > 32) {
confirmNumber();
} else {
    Nextprompts(passwordIncludes);
}


}

function confirmNumber() {
    if (confirm("Can you memorize a password this long? Please note we are not responsible for forgotten passwords and advise against this length") == true) {
Nextprompts();
    } else
    return;
}

function Nextprompts(passwordIncludes) {

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
var promptUser = promptUser();
btn.addEventListener("click", promptUser);
}