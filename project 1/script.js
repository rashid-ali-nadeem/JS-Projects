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
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim()) ){
        showSuccess(input)
    } else {
        showError(input, `Please provide a valid email`);
    }
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//function to check length of username and pasword.
function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} needs to be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// function to check  password and confirm password match
function checkPasswordMatch(input1, input2) {
    if ( input1.value !== input2.value ) {
        showError(input2, "Passwords don't match");
    }
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
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordMatch(password, confirmPassword);
});