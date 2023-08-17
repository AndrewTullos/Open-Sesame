// Assignment code here

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // THEN I select which criteria to include in the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // THEN my input should be validated and at least one character type should be selected
  // THEN a password is generated that matches the selected criteria
  // THEN the password is either displayed in an alert or written to the page
// Get references to the #generate element



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
