// Pseudo code 
// click with button ID to write text  prompts
// Selectable criteria for password
// Choose a length 8 - 128
// Confirm - upper/lower, num, and special
// Must choose 1
// GENERATE!
// Either displayed on an alert or writte to the page
// Write password to the #password input

// This Code generates the length requested by the user
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function () {
  const textPromptOne = prompt('Enter how many characters your password should be?', 'Between 8 - 128')
  if (textPromptOne < 8) {
    return alert('Dude! No, that is is less than 8. Try again...')
  } else if (textPromptOne > 128) {
    return alert('Easy Tiger! That\'s too long! Try again!')
  } else {
    const passwordLength = textPromptOne
    console.log(passwordLength)
    // const promptAnswerOne = document.getElementById('password')
    // promptAnswerOne.innerText = textPromptOne
  }
  // This code determines case sensitivity and special chars/nums
  const passwordUp = confirm('Would you like uppercase?');
  console.log(passwordUp);
  const passwordLow = confirm('Would you like lowercase?');
  console.log(passwordLow);
  const passwordSpecial = confirm('Would you like special characters?');
  console.log(passwordSpecial);
  alert('Sweet dude, one sec!')
});



// function writePassword() {
//     const password = generatePassword();
//     const passwordText = document.querySelector("#password");

//     passwordText.value = password;

//   }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
