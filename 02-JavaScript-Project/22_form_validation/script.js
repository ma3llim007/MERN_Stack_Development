let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
const btnsumbit = document.getElementById("btnsumbit");
const btnreset = document.getElementById("btnreset");

// Function For Setting Error
const setError = (element, message) => {
    let parentElement = element.parentElement;
    let inputBox = parentElement.querySelector(".form-control");
    let ErrorPara = parentElement.querySelector("#Error");
    ErrorPara.innerText = message;
    inputBox.classList.remove("success");
    inputBox.classList.add("error");
}

// Function For Setting Success Message
const setSuccess = (element) => {
    let parentElement = element.parentElement;
    let inputBox = parentElement.querySelector(".form-control");
    let ErrorPara = parentElement.querySelector("#Error");
    inputBox.classList.remove("error");
    inputBox.classList.add("success");
    ErrorPara.innerText = "";
}

// Function For Validate Form
const ValidateForm = () => {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmpassword.value.trim();

    if (usernameValue === '') {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, "Email is required");
    }else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    }
    else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "Password is required");
    }
    else if (passwordValue.length < 8) {
        setError(password, "Password Should Be Greater Than 8 Character");
    }
    else if (passwordValue.length > 20) {
        setError(password, "Password Should Not Be Greater Than 20 Character");
    }
    else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirmpassword, "Confirm Password is required");
    }
    else if (confirmPasswordValue.length < 8) {
        setError(confirmpassword, "Password Should Be Greater Than 8 Character");
    }
    else if (confirmPasswordValue.length > 20) {
        setError(confirmpassword, "Password Should Not Be Greater Than 20 Character");
    }
    else if (passwordValue !== confirmPasswordValue) {
        setError(confirmpassword, "Confirm Password Should Not Be Same as Password");
    }
    else {
        setSuccess(confirmpassword);
    }
}

// Funciton For Validate Email Regular Expression
function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

// Function For Validate
btnsumbit.addEventListener("click", (e) => {
    e.preventDefault();
    ValidateForm();
});
username.addEventListener("change", ValidateForm)
email.addEventListener("change", ValidateForm)
password.addEventListener("change", ValidateForm)
confirmpassword.addEventListener("change", ValidateForm)

// Function For Reset Validaet
btnreset.addEventListener("click", (e) => {
    e.preventDefault();
    let formInputElemnent = document.querySelectorAll(".form-control");
    let ErrorElement = document.querySelectorAll("#Error");
    formInputElemnent.forEach((input) => {
        input.classList.remove("error", "success");
        input.value = "";
    });
    ErrorElement.forEach((element) => {
        element.innerText = "";
    });
});

// Funciton For Disable The Copy And Past Of Password Field
const DisableFun = (e) => {
    e.preventDefault();
}

// Add Funciton To On Copy
password.addEventListener("copy", (e) => DisableFun(e));
confirmpassword.addEventListener("copy", (e) => DisableFun(e));

// Add Funciton To On Paste
password.addEventListener("paste", (e) => DisableFun(e));
confirmpassword.addEventListener("paste", (e) => DisableFun(e));