let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let a;
// let bValidStyle = window.getComputedStyle(bValid);

const emailFormStyles = {
    invl: {
        borderColor: "var(--Tomato)",
        color: "var(--Tomato)",
        backgroundColor: "hsla(4, 100%, 67%, 0.170)",
        //bValid: 
    },
    foc: {
        borderColor: "var(--Grey)",
        color: "var(--Dark-Slate-Grey)",
        backgroundColor: "white",
        //bValid:
    }
}

function toggleStyles(emailFormEvent) {
    const currentStyle = emailFormEvent ? styles.focus : styles.invalid;
}

function checkingEmailFormEvent(emailForm) {
    const  emailFormEvent = emailForm.event.type === "focus";
    toggleStyles(emailFormEvent)

}

emailForm.addEventListener("invalid", (e) => {
    bValid.style.display = "block";
    emailForm.style.borderColor = "var(--Tomato)";
    emailForm.style.color = "var(--Tomato)";
    emailForm.style.backgroundColor = "hsla(4, 100%, 67%, 0.170)";
})

for (let item in emailFormStyles) {
    
}
for (a in emailFormStyles.foc) {
    // console.log(emailFormStyles.attention);
    // console.log(a);
}

function focusState(a, emailFormStyles) {
    // console.log(a);
    // for (let a in emailFormStyles.attention) {
    //     console.log(emailFormStyles.attention);
    //     console.log(a);
    // }
    bValid.style.display = "none";
    // emailForm.style.color = "var(--Dark-Slate-Grey)";
    // emailForm.style.borderColor = "var(--Grey)";
    // emailForm.style.backgroundColor = "white";
    emailForm.style[a] = emailFormStyles.foc[a];
}

emailForm.addEventListener('focus', focusState(a, emailFormStyles));

// emailForm.addEventListener('focus', function(a) {
//     console.log(a);
//     // console.log('El campo de email tiene el foco.');
//     bValid.style.display = "none";
//     emailForm.style.color = "var(--Dark-Slate-Grey)";
//     emailForm.style.borderColor = "var(--Grey)";
//     emailForm.style.backgroundColor = "white";

//     // for (let a in emailFormStyles.attention) {
//     //     console.log(emailFormStyles[attention]);
//     // }
// });

form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    let emailValue = emailForm.value;
    // console.log(emailValue);

    if (emailForm.checkValidity()) {
        console.log("true");
        sessionStorage.setItem('emailAdressStorage', emailValue);
        console.log(emailValue);
        window.location.href = "success.html"
      } 

    checkingEmailFormEvent(emailForm)

})


