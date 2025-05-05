// Button  click message script

const clickBtn = document.getElementById("clickMeBtn");
const messageDisplay = document.getElementById("messageDisplay");

const fNameInput = document.getElementById("fNameArea");
const fNameMessage = document.getElementById("fNameValidationMessage");

const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("emailValidationMessage");

const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("passwordValidationMessage");


// Function to clear the message
function clear() {
    messageDisplay.value = ""; // Clears the content of the input field
}
//single click event
clickBtn.addEventListener("click",() => {
    messageDisplay.value = "You really fell for it?Iam not a magician 😆";
    messageDisplay.style.color = "blue";
    messageDisplay.onmouseleave =clear;
});

//Double click event

clickBtn.addEventListener("dblclick", () => {
   alert("Double click actvated!")
   messageDisplay.value = "Whoa! Double-click magic activated! ✨"
   messageDisplay.style.color = "green";
});

//key press on password

passwordInput.addEventListener("keypress",(event) => {
    console.log(`Key pressed in password field: ${event.key}`);
    messageDisplay.value = `You typed: ${event.key}`;
    
});

// Adding keypress listener to show letters typed in the message Display box
passwordInput.addEventListener("mouseleave", () => {
    messageDisplay.value = "";
    messageDisplay.style.color = "blue"
});


//Password Validation
passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 5) {
        passwordMessage.textContent = "Password should be at least 5 characters long!";
        passwordMessage.style.color = "red";
    } else {
        passwordMessage.textContent = ""; // Clear the message when valid
    }
});


// Full Name validation (at least two words)
fNameInput.addEventListener("input", () => {
    const nameValue = fNameInput.value.trim();
    if (nameValue.split(" ").length < 2) {
        fNameMessage.textContent = "Please enter both first and last name.";
        fNameMessage.style.color = "red";
    } else {
        fNameMessage.textContent = "Name looks good!";
        fNameMessage.style.color = "green";
    }
});

