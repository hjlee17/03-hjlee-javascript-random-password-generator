//  STARTER CODE -- Assignment Code
var generateBtn = document.querySelector("#generate");

/* README -- WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters */

/* RL -- asks user for length of password, 
then converts that string to an integer */
var generatePassword = function () {
  var length = window.prompt('Choose a password length of 8-128 characters:',);
  var pwLength = parseInt(length);


  // code below is to test the below code, can be removed
  console.log (pwLength + 10);
  


  // README -- WHEN asked for character types to include in the password

  // README -- THEN I confirm whether or not to include lowercase, 
  // RL -- asks user whether or not to include lowercase letters, 
  var lowercasePrompt= window.prompt('include lowercase characters? y or n:');
  lowercasePrompt = lowercasePrompt.toLowerCase();

  // RL -- then declare a variable where the choice will be stored as a boolean 
  var lowercaseChoice;

  // RL -- converts lowercasePromt y or n answer and stores as a boolean
  if (lowercasePrompt === 'y') {
    lowercaseChoice = true;
  } else if (lowercasePrompt === 'n') {
    lowercaseChoice = false;
  } else {
    console.log("invalid, enter 'y' to use lowercase letters or 'n'");
  }
  // code below is to test the below code, can be removed
  console.log("lowercase choice:", lowercaseChoice);


  // README include uppercase
  // RL -- asks user whether or not to include uppercase letters, 
  var uppercasePrompt= window.prompt('include uppercase characters? y or n:');
  uppercasePrompt = uppercasePrompt.toLowerCase();
  
  // RL -- then declare a variable where the choice will be stored as a boolean 
  var uppercaseChoice;
  
  // RL -- converts uppercasePrompt y or n answer and stores as a boolean
  if (uppercasePrompt === 'y') {
    uppercaseChoice = true;
  } else if (uppercasePrompt === 'n') {
    uppercaseChoice = false;
  } else {
    console.log("invalid, enter 'y' to use uppercase letters or 'n'");
  }
  
  // code below is to test the below code, can be removed
  console.log("uppercase choice:", uppercaseChoice);



  // README -- include numeric
  // RL -- asks user whether or not to include numbers, 
  var numbercharPrompt= window.prompt('include numeric characters? y or n:');
  numbercharPrompt = numbercharPrompt.toLowerCase();
      
  // RL -- then declare a variable where the choice will be stored as a boolean 
  var numbercharChoice;
      
  // RL -- converts uppercasePrompt y or n answer and stores as a boolean
  if (numbercharPrompt === 'y') {
    numbercharChoice = true;
  } else if (numbercharPrompt === 'n') {
    numbercharChoice = false;
  } else {
    console.log("invalid, enter 'y' to use numeric characters or 'n'");
  }
      
  // code below is to test the below code, can be removed
  console.log("numeric characters:", numbercharChoice);



  // README -- include special characters
  // RL -- asks user whether or not to special characters, 
  var specialcharPrompt= window.prompt('include special characters? y or n:');
  specialcharPrompt = specialcharPrompt.toLowerCase();
        
  // RL -- then declare a variable where the choice will be stored as a boolean 
  var specialcharChoice;
        
  // RL -- converts uppercasePrompt y or n answer and stores as a boolean
  if (specialcharPrompt === 'y') {
    specialcharChoice = true;
  } else if (specialcharPrompt === 'n') {
    specialcharChoice = false;
  } else {
    console.log("invalid, enter 'y' to use special characters or 'n'");
  }
        
  // code below is to test the below code, can be removed
  console.log("special characters:", specialcharChoice);



  // RL -- declare strings for all characters
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';


  // RL -- combine strings chosen by user
  var allChars = "";
    if (lowercaseChoice === true) {
      allChars += lowercaseChars;
    }
    if (uppercaseChoice === true) {
      allChars += uppercaseChars;
    }
    if (numbercharChoice === true) {
      allChars += numericChars;
    }
    if (specialcharChoice === true) {
      allChars += specialChars;
    }

  // code below is to test the below code, can be removed
  console.log("available characters: " + allChars);



  // RL -- finally, take all that information and generate a password at the given length
  var generatedPassword = '';  // empty string to store the password
    for (var i = 0; i < pwLength; i++) {   
      /* loop will continue as long as i < pwLength, 
      i++ means i = i + 1 */
      var randomIndex = Math.floor(Math.random() * allChars.length);   
      /* var randomIndex will be a random number (that falls within the length of the allChar string)
      Math.random() = random decimal between 0 and 1
      multiplying this by allChars.length = random number within length of allChars
      Math.floor() rounds down the decimal to the nearest whole number.*/
      generatedPassword += allChars.charAt(randomIndex);
      /*every time the 'for' loop runs, 
      a character from the allChars string at the randomIndex position is added
      to the generatedPassword string using the "charAt" and the += */
    }

  return generatedPassword;

  // code below is to test the below code, can be removed
  console.log("Generated Password:", generatedPassword);
}

// STARTER CODE -- Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// STARTER CODE -- Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
