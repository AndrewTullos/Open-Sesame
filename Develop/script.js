// Pseudo code 
// OnClick with button ID to write text  prompts
// Selectable criteria for password
// Choose a length 8 - 128
// Confirm - upper/lower, num, and special
// Must choose 1
// GENERATE!
// Either displayed on an alert or writte to the page
// Write password to the #password input

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function () {
  const textPromptOne = prompt('Enter how many characters your password should be?', 'Between 8 - 128')
  if (textPromptOne < 8) {
    return alert('Dude! No, that is is less than 8. Try again...')
  } else if (textPromptOne > 128) {
    return alert('Easy Tiger! That\'s too long! Try again!')
  } else {
    const promptAnswerOne = document.getElementById('password')
    promptAnswerOne.innerText = textPromptOne
  }
});

// function writePassword() {
//     const password = generatePassword();
//     const passwordText = document.querySelector("#password");

//     passwordText.value = password;

//   }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
