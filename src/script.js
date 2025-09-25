const inp = document.querySelector("#password");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy");
const length = 8;

//character
const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetter = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "@!#$%^&*(){}[]-_\/\?,.<>~";

function generatePassword() {
    let password = "";
    // Add at least one character from each type
    password += capitalLetter[Math.floor(Math.random() * capitalLetter.length)];
    password += smallLetter[Math.floor(Math.random() * smallLetter.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

    // Fill the rest of the password length with random characters from all types
    const allChars = capitalLetter + smallLetter + number + specialSymbol;
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to make it random
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    // explaination: 
    //spilit() -> make 'password' string into array
    //sort() -> sort the array with comparison function{
    // Math.random() -> generate random number between 0-1
    // Math.random() - 0.5 -> makes the result randomly positve or negative
    // when positive -> sort() method swap the elements
    // when negative or equal no change
    //}
    //join() -> it takes the array & make them into string. '' means join without any sepeerator
    
    // Display the password in the input field
    inp.value = password;
}

btn.addEventListener("click" , generatePassword);

//for copy password
function copyText() {
  // window-> navigator -> clipboard -> writeText (for copy text)
  navigator.clipboard.writeText(inp.value);
  
  const tooltip = copy.parentElement; //access 'tolkit' div element
  const originalText = tooltip.getAttribute('data-tip'); //access data-tip
  
  // Change tooltip text to "Copied!"
  tooltip.setAttribute('data-tip', 'Copied!');
  
  // Reset tooltip text after 2 seconds
  setTimeout(() => {
    tooltip.setAttribute('data-tip', originalText);
  }, 2000);
}

copy.addEventListener("click" , copyText);