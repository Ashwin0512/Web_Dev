const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInputs();
})

function checkInputs()  {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(usernameValue === '' || usernameValue == null)    {
        setErrorFor(username, "Username cannot be blank");
    } else  {
        setSuccessFor(username);
    }

    if(emailValue === '' || emailValue == null) {
        setErrorFor(email, "Email cannot be empty");
    }   else    {
        if(isEmailValid(emailValue)) {
            setSuccessFor(email);
        } else {
            setErrorFor(email, "Email is not valid");
        }
    }

    if(passwordValue === '' || passwordValue == null)    {
        setErrorFor(password,"Password cannot be empty");
    }   else    {
        setSuccessFor(password);
    }

    if(passwordCheckValue !== passwordValue)    {
        setErrorFor(passwordCheck, "Both passwords do not match");
    }   else    {
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(field,message) {
    const formField = field.parentElement;
    const errorMsg = formField.querySelector('small');
    errorMsg.innerText = message;
    formField.classList.remove('success');
    formField.classList.add('error');
}

function setSuccessFor(field)   {
    const formField = field.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
}

function isEmailValid(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}