//  STARTER CODE -- Assignment Code
var generateBtn = document.querySelector("#generate");

/* RL -- asks user for length of password, 
then converts that string to an integer */

var generatePassword = function () {
  var step = 0;
  while (step === 0) {
    var length = window.prompt('choose a password length of 8-128 characters:',);
    if (length === null) {
    console.log("canceled.");
    step = false;
    break; 

  }
    var pwLength = parseInt(length);

      // RL -- if input is not a number from 8-128 or if it is not a number, asks for input again
      if (isNaN(pwLength)) {
        window.alert("not a number. enter a number between 8 and 128.");
      } else if (pwLength < 8 || pwLength > 128) {
        window.alert("invalid length. enter a number between 8 and 128.");
      } else {
        step = 1;
        break; 
      }
  }

  // code below is to test the below code, can be removed
  console.log (pwLength + 10);
  
  // RL -- asks user whether or not to include lowercase letters,
  while (step === 1) {
    var lowercasePrompt= window.prompt('include lowercase characters? y or n:');
    lowercasePrompt = lowercasePrompt.toLowerCase();

    // RL -- declare variable where choice is stored as a boolean 
    var lowercaseChoice;

    // RL -- converts lowercasePrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (lowercasePrompt === 'y') {
      lowercaseChoice = true;
      step = 2;
      break; 
    } else if (lowercasePrompt === 'n') {
      lowercaseChoice = false;
      step = 2;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use lowercase letters or 'n' to skip.");
    }
  }

  // code below is to test the above code, can be removed
  console.log("lowercase choice:", lowercaseChoice);

  // RL -- asks user whether or not to include uppercase letters, 
  while (step === 2) {
    var uppercasePrompt= window.prompt('include uppercase characters? y or n:');
    uppercasePrompt = uppercasePrompt.toLowerCase();
  
    // RL -- declare variable where choice is stored as a boolean 
    var uppercaseChoice;
  
    // RL -- converts uppercasePrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (uppercasePrompt === 'y') {
      uppercaseChoice = true;
      step = 3;
      break; 
    } else if (uppercasePrompt === 'n') {
      uppercaseChoice = false;
      step = 3;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use uppercase letters or 'n' to skip.");
    }
  }

  // code below is to test the above code, can be removed
  console.log("uppercase choice:", uppercaseChoice);

  // RL -- asks user whether or not to include numbers, 
  while (step === 3) {
    var numbercharPrompt= window.prompt('include numeric characters? y or n:');
    numbercharPrompt = numbercharPrompt.toLowerCase();
        
    // RL -- declare variable where choice is stored as a boolean
    var numbercharChoice;
        
    // RL -- converts numbercharPrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (numbercharPrompt === 'y') {
      numbercharChoice = true;
      step = 4;
      break; 
    } else if (numbercharPrompt === 'n') {
      numbercharChoice = false;
      step = 4;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use numeric characters or 'n' to skip.");
    }
  }
      
  // code below is to test the above code, can be removed
  console.log("numeric characters:", numbercharChoice);

  // RL -- asks user whether or not to special characters, 
  while (step === 4) {
    var specialcharPrompt= window.prompt('include special characters? y or n:');
    specialcharPrompt = specialcharPrompt.toLowerCase();
          
    // RL -- declare variable where choice is stored as a booleanan 
    var specialcharChoice;
          
    // RL -- converts specialcharPrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (specialcharPrompt === 'y') {
      specialcharChoice = true;
      break; 
    } else if (specialcharPrompt === 'n') {
      specialcharChoice = false;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use special characters or 'n' to skip.");
    }
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

  // code below is to test the above code, can be removed
  console.log("available characters: " + allChars);

  // RL -- send them back to start over with the character prompts if user hasn't selected any of the four char types
  if (allChars === "" && step !== false) {
    window.alert("no character types were selected. at least one must be selected. restart the process.");
    return ''; 
  }


  // RL -- finally, take all that information and generate a password at the given length
  var generatedPassword = '';  // empty string to store the password
    for (var i = 0; i < pwLength; i++) {   
      /* loop continues as long as i < pwLength, 
      i++ means i = i + 1 */
      var randomIndex = Math.floor(Math.random() * allChars.length);   
      /* var randomIndex will be a random number equal to or less than length of allChars
      Math.random() = random decimal between 0 and 1
      multiplying this by allChars.length = random number within length of allChars
      Math.floor() rounds down the decimal */
      generatedPassword += allChars.charAt(randomIndex);
      /*every time the 'for' loop runs, 
      a character is added from allChars string @ randomIndex position 
      to the generatedPassword string using the "charAt" and the += */
    }

    // code below is to test the above code, can be removed
    console.log("Generated Password:", generatedPassword);

  return generatedPassword;
}

// STARTER CODE -- Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// STARTER CODE -- Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
