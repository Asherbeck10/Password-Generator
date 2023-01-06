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
  
  let userLowercase=confirm("Wold you like to use lowercase characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character");
  
  let userUppercase=confirm("Wold you like to use uppercase characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character");
  
  let userNumeric=confirm("Wold you like to use numeric characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character");
  
  let userSpecialCharacters=confirm("Wold you like to use special characters characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character");
  
  return {characters:numberCharacters, lowercase:userLowercase, uppercase:userUppercase, numeric:userNumeric, special:userSpecialCharacters};



  
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  randomCharacter=arr[Math.floor((Math.random()*arr.length))]
  
  return randomCharacter
  

}

// Function to generate password with user input
function generatePassword() {
 let userInput= getPasswordOptions()
 let arr=[];

 if (userInput.lowercase===true) {
  arr=arr.concat(lowerCasedCharacters)
  
  
 }
 if (userInput.uppercase===true) {
  arr=arr.concat(upperCasedCharacters)
  
  
 }
 if (userInput.numeric===true) {
  arr=arr.concat(numericCharacters)
  
  
 }
 if (userInput.special===true) {
  arr=arr.concat(specialCharacters)


 }
 let password=""
 for (let i = 0; i <userInput.characters; i++) {
  
  password=password.concat(getRandom(arr))
  
 }
 
  
  alert("Your Password is: " +password)
  return password

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