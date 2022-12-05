// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//function to update class and message for errors.
function showError (input, message) {
    // Get the parent element of the input field(.form-control)
    const formControl = input.parentElement;
    // Override the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message.
    const small = formControl.querySelector('small');
    // Override the text for small element using the input message.
    small.innerText = message;
}

// function to update class for success
function showSuccess(input){
    // Get the parent element of the input field(.form-control)
    const formControl = input.parentElement;
    // Override the class - add Success
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function isValidEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// function to get the id of the input field
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// function to check if required fields have Data.
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value === '') {
            showError(input, `${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Create Event Listener for submit button
form.addEventListener('submit', function(e) {
    // stop page from reloading
    e.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    
});