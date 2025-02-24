const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check inputs length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check age
function checkAge(input, min, max) {
    if((input.value < min)) {
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    } else if (input.value >= max) {
        showError(input, `${getFieldName(input)} must be less than ${max}`);
    }
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check password is valid
function checkPassword(input, min, max) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\`~!@#\$%\^&\*\(\)_\+\-={}\[\]\\|:;"'<>,\.\?/]).*$/;
    
    if (input.value.length < min || input.value.length > max) {
        showError(input, `Password must be between ${min} and ${max} characters`);
    } else if(re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Password is not valid');
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, age, email, password, password2]);
    checkLength(username, 3, 15);
    checkAge(age, 0, 1000);    
    checkEmail(email);
    checkPassword(password, 8, 25);
    checkPasswordsMatch(password, password2);
});