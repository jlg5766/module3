// array of special characters
var spCharacters = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '}',
  '~'
];

// array of lowercase letters
var lowercase = [
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
  'z',
];

// array of uppercase letters
var uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'M',
  'N',
  'O',
  'P',
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
  'Z',
];

// array of numbers
var numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];



// creating function for gathering input from user
function gatherInput () {


// prompt user for input
var charlength = prompt("Choose a number between 8 and 128 for your character length");
console.log(charlength);

// while loop to prompt user to enter correct value until condition is met
while (charlength < 8) {
  alert("You must enter a number between 8 and 128");
  var charlength = prompt("Choose a number between 8 and 128 for your character length");
  }
// while loop to prompt user to enter correct value until condition is met
while (charlength > 128) {
  alert("You must enter a number between 8 and 128");
  var charlength = prompt("Choose a number between 8 and 128 for your character length");
  }


// setting variable for each piece used to form password
var chartype_1 = confirm("Click 'OK' to include SPECIAL characters");
console.log(chartype_1);

var chartype_2 = confirm("Click 'OK' to include NUMERIC characters");
console.log(chartype_2);

var chartype_3 = confirm("Click 'OK' to include lowerCASE letters");
  console.log(chartype_3);

var chartype_4 = confirm("Click 'OK' to include UPPERCASE");
  console.log(chartype_4);


// conditional stational to check if criteria has been selected
if (chartype_1 === false &&
    chartype_2 === false &&
    chartype_3 === false &&
    chartype_4 === false) {
    alert("You must select at least 1 character type");
    return;
  }



// creating an object with properties from user input
var input = {
  charlength: charlength, 
  chartype_1: chartype_1,
  chartype_2: chartype_2,
  chartype_3: chartype_3,
  chartype_4: chartype_4  
  };

  return input;
}

// generating random things from array
function radnum(list) {
  var randIndex = Math.round(Math.random() * list.length);
  var randElement = list[randIndex];
  
  return randElement;

}
 
function generatePassword() {
  var options = gatherInput();
  var result = [];

  var characters_1 = [];
  var characters_2;

  if (options.chartype_1) {
    characters_1 = characters_1.concat(chartype_1);
    characters_2.push(radnum(chartype_1));
  }

if (options.chartype_2) {
  characters_1 = characters_1.concat(chartype_2);
  characters_2.push(radnum(chartype_2));
}

if (options.hasLowerCasedCharacters) {
  characters_1 = characters_1.concat(lowerCasedCharacters);
  characters_2.push(radnum(lowerCasedCharacters));
}


if (options.chartype_4) {
  characters_1 = characters_1.concat(chartype_4);
  characters_2.push(radnum(chartype_4));
}


for (var i = 0; i < options.length; i++) {
  var characters_1 = radnum(characters_1);

  result.push(characters_1);
}

// Mix in at least one of each guaranteed character in the result
for (var i = 0; i < characters_2.length; i++) {
  result[i] = characters_2[i];
}

// Transform the result into a string and pass into writePassword
return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
