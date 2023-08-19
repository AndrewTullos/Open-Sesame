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

// Object stores the password parameters set by the user
const passObj = {
  length: undefined,
  special: undefined,
  upper: undefined,
  lower: undefined,
};

// User instructions
alert('Answer the alert/prompts then press the generate button to create a password!')

// Determines the length of requested password
const textPromptOne = prompt('Enter how many characters your password should be?', 'Between 8 - 128');
if (Number(textPromptOne) < 8) {
  alert('Not enough. Try again');
} else if (Number(textPromptOne) > 128) {
  alert('Too many. Try again');
} else {
  passObj.length = Number(textPromptOne);
}

// Determines if password should include special characters
const specialChar = confirm('Will your password require special characters?');
if (specialChar === true) {
  passObj.special = true;
};

// Determines if password should include uppercase
const upper = confirm('Will your password require upper case?');
if (upper === true) {
  passObj.upper = true;
};

// Determines if password should include lower case
const lower = confirm('Will your password require lower case??');
if (lower === true) {
  passObj.lower = true;
};

// Button generates the code to fill the object
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', function () {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
});

// Create placeholder for password to include all true values
function generatePassword() {
  let passwordStr = '';
  if (passObj.special === true) {
    passwordStr += '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  if (passObj.upper === true) {
    passwordStr += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (passObj.lower === true) {
    passwordStr += 'abcdefghijklmnopqrstuvwxyz';
  }

  // Return the password - set the loop to iterate through the placeholder at random

  let password = '';
  for (let i = 0; i < passObj.length; i++) {
    const randomMath = Math.floor(Math.random() * passwordStr.length);
    password += passwordStr[randomMath];
  }
  //  Return password 
  return password;
}


// Notes:
// Arrays set to iterate through the length
// const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// for (i = 0; i < lowAlphabet.length; i++) {
//   console.log(lowAlphabet[i]);
// }

// const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// for (i = 0; i < upperAlphabet.length; i++) {
//   console.log(upperAlphabet[i]);
// }

// const specialChar = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');
// for (i = 0; i < specialChar.length; i++) {
//   console.log(specialChar[i]);
// };
