// Assignment variables for the password
var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specials = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// GeneratePassword for prompting the length and characters of the password
function generatePassword() {
    var length = parseint(prompt("How many characters would you like your password to have"))
    if (Number.isNaN(length)) {
        alert("Password must be provided as a number")
        return null
    }
    if (length < 8) {
        alert("Password must be 8 characters or greater!")
        return null
    }

    if (length > 128) {
        alert("Password must be less than 128 characters!")
        return null
    }
        // confirming options for password characters
    var confirmspecialCharacters = confirm("Click okay to include special characters")
    var confirmlowercaseCharacters = confirm("Click okay to include lowercase")
    var confirmuppercaseCharacters = confirm("Click okay to include uppercase")
    var confirmnumberCharacters = confirm("Click okay to include number")
    
    if (confirmspecialCharacters === false && confirmlowercaseCharacters === false && confirmuppercaseCharacters === false & confirmnumberCharacters === false); {
        alert("You didn't click okay, you must select at least one character type.")
        return null
    }
     var passwordOption = {
         length: length, 
         confirmuppercaseCharacters: confirmuppercaseCharacters, 
         confirmlowercaseCharacters: confirmlowercaseCharacters, 
         confirmnumberCharacters: confirmnumberCharacters,
         confirmspecialCharacters: confirmspecialCharacters,
     }    
        return passwordOption
}

// Generate index from the variables and put them somewhere in a new function getrandom 

// function to generate password - include two for loops in the password generate i++

// write password function to call generatePassword function

 // Generate Password
 var newPass = [];
 var newPassArray = "";

 while (newPass.length < passwordLength) {
   var randChar = newPassArray[Math.floor(Math.random() * newPassArray.length)];
   newPass.push(randChar);
 }
 var joinPass = newPass.join("");


    // Write password to the #password id
function writePassword() {
    var password = generatePassword();
    var generatePw = document.querySelector("#password");
{

    // query selector for pw button
var generateBtn = document.querySelector("#generate");

    // Add event listener to generate password
 generateBtn.addEventListener("click", writePassword);
}}s;