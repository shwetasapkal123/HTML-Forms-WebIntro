//uc1 first name start with capital letter and min 3 letter
const text = document.querySelector('#text');               //storing the value using id = text
const textError = document.querySelector('.text-error');    //similarly getting output for texterror 
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value) || !text.value)
    {
        textError.textContent = "";
    }
    else 
    {
        textError.textContent = "Name is Incorrect";
    }
});

//UC2 Validating Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function()
    {
        let emailRegex = RegExp("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,10})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$");
        if(emailRegex.test(email.value) || !email.value)
        {
            emailError.textContent = " ";
        }
        else
        {
            emailError.textContent = "Email is not valid";

        }
    });

    //uc3-validating mobile number
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = RegExp("^[+]?91[ -][1-9][0-9]{9}$");
    if (telRegex.test(tel.value) || !tel.value) 
    {
        telError.textContent = "";
    }
    else 
    {
        telError.textContent = "Moble number is not Valid";
    }
});

//uc4-Validating - Rule 1-password should have min 8 characters
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let pwdRegex = RegExp("^[a-zA-Z]{8,}$");
    if (pwdRegex.test(pwd.value)) {
       pwdError.textContent = "";
    }
    else {
        pwdError.textContent = "password is not Valid";
    }
});