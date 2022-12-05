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

// Create Event Listener for submit button
form.addEventListener('submit', function(e) {
    // stop page from reloading
    e.preventDefault();
    
    // check if username input is empty
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    // check if Email input is empty
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    }

    // check if Password input is empty
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    // check if confirmPassword input is empty
    if (confirmPassword.value === '') {
        showError(confirmPassword, 'Confirm Password is required');
    } else {
        showSuccess(confirmPassword);
    }
});