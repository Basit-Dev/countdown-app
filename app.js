// Get user input from input field
// When button clicked a coundown timer starts from the number that as entered from the user

// Variables
const userInputValue = document.getElementById("user-input");
const check = document.getElementById("user-input").required = true;
const getBtnEl = document.getElementById("btn-cta");
const getTimerEl = document.getElementById("timer");
const getSecondsEl = document.getElementById("seconds");

// On window reload highlight the input field
window.onload = function(){
    userInputValue.focus();
}
// Function to run when btn clicked
const displayInputValue = function () {
  getBtnEl.addEventListener("click", function () {
    //userInputValue.setAttribute("required", ""); 
      startTimer(userInputValue.value, userInputValue, getSecondsEl)
  });
};

displayInputValue();

// Timer function
const startTimer = function(durationValue, clearInput, displayEl) {
   // Check conditions if user has entered a number above 0 or a number has been entered otherwise run the interval function;
    if (!durationValue || durationValue == 0) {
            displayEl.textContent = "Enter any numbers above 1";
            clearInput.value ='';
            clearInput.focus()
        } else if (isNaN(durationValue)) {
            displayEl.textContent = "Enter numbers only, letters are not allowed!";
            clearInput.value ='';
            clearInput.focus()
        } else {
            // If it pases the conditions then execute timer
            const interval = setInterval(function () {
            // Convert durationValue which is a string to a integer
            seconds = parseInt(durationValue);
            // Add zero if seconds are below 10
            // Display seconds in the DOM
            displayEl.textContent = seconds;
            // If seconds is zero then stop the timer otherwise start countdown every second
                if (seconds == 0) {
                    clearInterval(interval);
                    userInputValue.value = '';
                    displayEl.textContent = "CountDown Completed!";
                    displayEl.style.color = 'yellow';
                } else {
                    --durationValue;
        } 
    }, 1000);
    }
}
 

