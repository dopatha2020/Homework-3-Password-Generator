var lowerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolChoices = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

function getRandom(arr) {
    var itemIndex=Math.floor(Math.random()*arr.length);
    var item=arr[itemIndex];
    return item;
}

function generatePassword() {
  var passwordLength = prompt('Choose a password character length-between 8 and 128');
  while (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) {
    alert('Please choose numbers only and/or between 8 and 128.');
    passwordLength = prompt('Choose a password character length-between 8 and 128');
  }

console.log("check");
  var passwordTypelower = confirm('Would you like the password to contain lowercase?');
  var passwordTypeupper = confirm('Would you like the password to contain uppercase?');
  var passwordTypenumber = confirm('Would you like the password to contain numbers?');
  var passwordTypespecial = confirm('Would you like the password to contain special characters?');

  var singleList = []
    if (passwordTypelower) {
    singleList.push(...lowerChoices);
    } 
    if (passwordTypeupper) {
    singleList.push(...upperChoices);
    } 
    if (passwordTypenumber) {
    singleList.push(...numberChoices);
    }     
    if (passwordTypespecial) {
    singleList.push(...symbolChoices);
    } 
  console.log(singleList);

  var finalPassword = "";
   for (var i = 0; i < passwordLength; i++) {
          var finalPasswordCharacter = getRandom(singleList);
          finalPassword = finalPassword + finalPasswordCharacter;
          console.log(finalPassword);
        }
         alert(finalPassword);
    return finalPassword;
      }

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
