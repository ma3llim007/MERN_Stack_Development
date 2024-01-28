const Form = document.querySelector("Form");
Form.addEventListener("submit", function (e) {
    e.preventDefault();
    returnValue = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const terms = document.getElementById("terms");
    // Validate The Name
    if (name.value.length == 0) {
        SetError("ErrorName", "* Name Should Not Be Empty");
        returnValue = false;
    }else if (name.value.length < 5) {
        SetError("ErrorName", "* Name Should Not Be Greater Than 5");
        returnValue = false;
    } else {
        RemoveError("ErrorName");
    }
    // Validate The Email
    if (email.value.length == 0) {
        SetError("ErrorEmail", "* Email Should Not Be Empty");
        returnValue = false;
    }
    else {
        RemoveError("ErrorEmail");
    }
    // Validate The phone
    if (phone.value.length == 0) {
        SetError("ErrorPhone", "* Phone Should Not Be Empty");
        returnValue = false;
    }
    else {
        if (isNaN(phone.value)) {
            SetError("ErrorPhone", "* Phone Should Be Only In Number Not In Alphabet");
            returnValue = false;
        } else {
            RemoveError("ErrorPhone");
            if (phone.value.length < 10) {
                SetError("ErrorPhone", "* Phone Should Be 10 Character");
                returnValue = false;
            } else if (phone.value.length > 10) {
                SetError("ErrorPhone", "* Phone Should Be 10 Character");
                returnValue = false;
            }
            else {
                RemoveError("ErrorPhone");
            }
        }
    }
    
    // Validate The Subject
    if (subject.value == 0) { 
        SetError("ErrorSubject", "* Please Select The Subject");
        returnValue = false;
    } else {
        RemoveError("ErrorSubject");
    }
    
    // Validate The Message
    if (message.value == 0) { 
        SetError("ErrorMessage", "* Please Enter The Message");
        returnValue = false;
    } else {
        RemoveError("ErrorMessage");
    }

    // Validate The CheckBox
    if (!terms.checked) {
        SetError("ErrorTerms", "* Please Check The Terms & Condition");
        returnValue = false;
    } else {
        RemoveError("ErrorTerms");
    }
    // Show The Success Alert
    if (returnValue) {
        alert("Contact Details Successfully Sent To Admin");
        name.value = "";
        email.value = "";
        phone.value = "";
        subject.value = 0;
        message.value = "";
        terms.checked = false;
    }
});

// Function For Set Error
const SetError = (ErrorField , message) => {
    const ErrorElement = document.getElementById(`${ErrorField}`);
    ErrorElement.innerText = message;
}

// Function For Remove Error
const RemoveError = (ErrorField) => {
    const ErrorElement = document.getElementById(`${ErrorField}`);
    ErrorElement.style.display = "none";
}