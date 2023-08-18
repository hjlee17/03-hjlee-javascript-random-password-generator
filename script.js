//  STARTER CODE -- Assignment Code
var generateBtn = document.querySelector("#generate");

/* README -- WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters */

/* RL -- asks user for length of password, 
then converts that string to an integer */
var generatePassword = function () {
  while (true) {
    var length = window.prompt('choose a password length of 8-128 characters:',);
  // RL NOT COMPLETED -- if user cancels, next prompt does not continue
    if (length === null) {
    console.log("canceled.");
    break; 
  }
    var pwLength = parseInt(length);

      // RL -- if input is not a number from 8-128 or if it is not a number, asks for input again
      if (isNaN(pwLength)) {
        window.alert("not a number. enter a number between 8 and 128.");
      } else if (pwLength < 8 || pwLength > 128) {
        window.alert("invalid length. enter a number between 8 and 128.");
      } else {
        break; 
      }
  }

  // code below is to test the below code, can be removed
  console.log (pwLength + 10);
  



  // RL -- asks user whether or not to include lowercase letters,
  while (true) {
    var lowercasePrompt= window.prompt('include lowercase characters? y or n:');
    lowercasePrompt = lowercasePrompt.toLowerCase();

    // RL -- then declare a variable where the choice will be stored as a boolean 
    var lowercaseChoice;

    // RL -- converts lowercasePrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (lowercasePrompt === 'y') {
      lowercaseChoice = true;
      break; 
    } else if (lowercasePrompt === 'n') {
      lowercaseChoice = false;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use lowercase letters or 'n' to skip.");
    }
  }

  // code below is to test the below code, can be removed
  console.log("lowercase choice:", lowercaseChoice);



  // RL -- asks user whether or not to include uppercase letters, 
  while (true) {
    var uppercasePrompt= window.prompt('include uppercase characters? y or n:');
    uppercasePrompt = uppercasePrompt.toLowerCase();
  
    // RL -- then declare a variable where the choice will be stored as a boolean 
    var uppercaseChoice;
  
    // RL -- converts uppercasePrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (uppercasePrompt === 'y') {
      uppercaseChoice = true;
      break; 
    } else if (uppercasePrompt === 'n') {
      uppercaseChoice = false;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use uppercase letters or 'n' to skip.");
    }
  }

  // code below is to test the below code, can be removed
  console.log("uppercase choice:", uppercaseChoice);



  // RL -- asks user whether or not to include numbers, 
  while (true) {
    var numbercharPrompt= window.prompt('include numeric characters? y or n:');
    numbercharPrompt = numbercharPrompt.toLowerCase();
        
    // RL -- then declare a variable where the choice will be stored as a boolean 
    var numbercharChoice;
        
    // RL -- converts numbercharPrompt y or n answer and stores as a boolean
    // RL -- if user does not input a y or n, asks again for input.
    if (numbercharPrompt === 'y') {
      numbercharChoice = true;
      break; 
    } else if (numbercharPrompt === 'n') {
      numbercharChoice = false;
      break; 
    } else {
      window.alert("invalid, enter 'y' to use numeric characters or 'n' to skip.");
    }
  }
      
  // code below is to test the below code, can be removed
  console.log("numeric characters:", numbercharChoice);



  // RL -- asks user whether or not to special characters, 
  while (true) {
    var specialcharPrompt= window.prompt('include special characters? y or n:');
    specialcharPrompt = specialcharPrompt.toLowerCase();
          
    // RL -- then declare a variable where the choice will be stored as a boolean 
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

  // code below is to test the below code, can be removed
  console.log("available characters: " + allChars);



  // RL? instead of asking user to start over, can i send them back to start over with the character prompts?
  if (allChars === "") {
    window.alert("no character types were selected. at least one must be selected. restart the process.");
    return ''; 
  }


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
