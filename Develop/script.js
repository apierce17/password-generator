// Assignment code here

// Empty array that will contain user selections
var passwordItems = [];


// Event listener waiting for user click
document.getElementById("generate").addEventListener("click", promptMe);

//Start of password generator
function promptMe() {
  // Clears previous password when making new password
  password = [];

  // Prompt asking user their desired password length
  var passLength = prompt("Please enter a length between 8 and 128.");
  if (passLength <= 7) {
    window.alert("Please enter number higher than 7");
    return promptMe();}
    else if (passLength >= 129) {
      window.alert("Please enter number lower than 129");
      return promptMe();}

    // Prompts to ask user what they would like followed pushes to push selections to empty array
    var numbers = confirm("Would you like numbers?");
    if (numbers == true) {
      passwordItems.push(1,2,3,4,5,6,7,8,9);
    }

    var upperLetter = confirm("Would you like upper case letters?");
    if (upperLetter == true) {
      passwordItems.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z");
    }

    var lowerLetter = confirm("Would you like lower case letters?");
    if (lowerLetter == true) {
      passwordItems.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z");
    }

    var specialChar = confirm("Would you like special characters?");
    if (specialChar == true) {
      passwordItems.push("!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","'",".","<",">");
    }

    // Alert if the user doesn't select anything to put in password
    if (passwordItems === undefined || passwordItems.length == 0) {
      window.alert("Please make at least one selection");
      return;
    }

    // Convert password selections to a string and make a random password
    for(var i = 0; i < passLength; i++){
      var values = passwordItems.join("");
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }
    // Puts generated password on screen
    document.getElementById("password").innerText = password.replace("[object HTMLTextAreaElement]", "");
  }

// COULD NOT GET THIS TO WORK SO I FIGURED OUT A DIFFERENT WAY

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)};