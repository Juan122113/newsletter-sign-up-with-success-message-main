let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");

const emailFormStyles = {
    "invalid": {
        "borderColor": "var(--Tomato)",
        "color": "var(--Tomato)",
        "backgroundColor": "hsla(4, 100%, 67%, 0.170)"
    },
    "focus": {
        "borderColor": "var(--Grey)",
        "color": "var(--Dark-Slate-Grey)",
        "backgroundColor": "white"
    }
}

bValidStyles = {
    invalid: "block",
    focus: "none"
}

function changingBValidStyles(itemA, bValid, bValidStyles) {
    bValid.style.display = bValidStyles[itemA];
}

function changingEmailFormStyles(currentStyle, itemA, emailForm, bValid, bValidStyles) {
    for (let itemB in currentStyle) {
        emailForm.style[itemB] = currentStyle[itemB];
    }
    changingBValidStyles(itemA, bValid, bValidStyles);
}

function wichEvent(isFocus, itemA, emailFormStyles, emailForm, bValid, bValidStyles) {
    const currentStyle = isFocus ? emailFormStyles.focus : emailFormStyles.invalid;
    changingEmailFormStyles(currentStyle, itemA, emailForm, bValid, bValidStyles);
}

for (let itemA in emailFormStyles) {
    emailForm.addEventListener(itemA, function() {
        const isFocus = itemA === "focus";
        console.log(isFocus);
        wichEvent(isFocus, itemA, emailFormStyles, emailForm, bValid, bValidStyles);
    });
    console.log(itemA);
}

function windowLocation() {
    window.location.href = "success.html";
}

function storageEmailFormValue(emailForm) {
    sessionStorage.setItem('emailAdressStorage', emailForm.value);
    windowLocation();
}

function checkValidityEmailForm(emailForm) {
    if (emailForm.checkValidity()) {
        console.log("true");
        storageEmailFormValue(emailForm)
      } 
}

form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    checkValidityEmailForm(emailForm);

});


