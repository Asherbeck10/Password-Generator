// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let numberCharacters = prompt("Number of characters,Please enter a number between 10 and 64.");
  console.log(numberCharacters)
  let userLowercase=confirm("Wold you like to use lowercase characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character")
  console.log(userLowercase)
  let userUppercase=confirm("Wold you like to use uppercase characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character")
  console.log(userUppercase)
  let userNumeric=confirm("Wold you like to use numeric characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character")
  console.log(userNumeric)
  let userSpecialCharacters=confirm("Wold you like to use special characters characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character")
  console.log(userSpecialCharacters)
  return numberCharacters



  
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  randomCharacter=arr[Math.floor((Math.random()*arr.length))]
  console.log( "random " +randomCharacter)
  return

}

// Function to generate password with user input
function generatePassword() {
 let numberCharacters= getPasswordOptions()
  for (let i = 0; i < numberCharacters; i++) {
    getRandom(upperCasedCharacters);
    
  }
  
  return

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);