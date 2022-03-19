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