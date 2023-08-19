// Pseudo code 
// click with button ID to write text  prompts
// Selectable criteria for password
// Choose a length 8 - 128
// Confirm - upper/lower, num, and special
// Must choose 1
// GENERATE!
// Either displayed on an alert or writte to the page
// Write password to the #password input

// Arrays
// const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const specialChar = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

// Password Array
// const password = [

// ]

// This Code generates the length requested by the user
const passObj = {
  length: undefined,
  special: undefined,
  upper: undefined,
  lower: undefined,
};

console.log(passObj)

const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', function () {
  const textPromptOne = prompt('Enter how many characters your password should be?', 'Between 8 - 128');
  if (Number(textPromptOne) < 8) {
    return alert('Not enough. Try again')
  } else if (Number(textPromptOne) > 128) {
    return alert('Too many. Try again')
  } else {
    passObj.length = Number(textPromptOne)
  };

  const specialChar = confirm('Will your password require special characters?');
  if (specialChar === true) {
    passObj.special = true;
  };
  const upperAlphabet = confirm('Will your password require upper case?');
  if (upper === true) {
    passObj.upper = true;
  };
  const lowAlphabet = confirm('Will your password require lower case??');
  if (lower === true) {
    passObj.lower = true;
  };
})



// //Take passwordLength, passwordUp, passwordLow and passwordSpec


// function writePassword() {
//     const password = generatePassword();
//     const passwordText = document.querySelector("#password");

//     passwordText.value = password;

//   }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// Junk
// const textPromptOne = prompt('Enter how many characters your password should be?', 'Between 8 - 128')
// if (textPromptOne < 8) {
//   return alert('Dude! No, that is is less than 8. Try again...')
// } else if (textPromptOne > 128) {
//   return alert('Easy Tiger! That\'s too long! Try again!')
// } else {
//   const passwordLength = textPromptOne
//   console.log(passwordLength)
// }