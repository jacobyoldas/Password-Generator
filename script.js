// Button generating 
var generatebtn = document.querySelector("#generate");

// Accepting password to the #password input
function writepassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   }
// Adding event listener to generate button
generatebtn.addEventListener("click", writepassword);
