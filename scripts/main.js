let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let a;
let b;
// let bValidStyle = window.getComputedStyle(bValid);

const events = ['focus', 'invalid'];

// console.log(emailForm.event.type);

const emailFormStyles = {
    "invalid": {
        borderColor: "var(--Tomato)",
        color: "var(--Tomato)",
        backgroundColor: "hsla(4, 100%, 67%, 0.170)"
        //bValid: 
    },
    "focus": {
        borderColor: "var(--Grey)",
        color: "var(--Dark-Slate-Grey)",
        backgroundColor: "white"
        //bValid:
    }
}

bValidStyles = {
    invl: "block",
    foc: "none"
}

events.forEach((evnt) => {
    emailForm.addEventListener(evnt, function() {
        const isFocus = evnt === "focus";
        const currentStyle = isFocus ? emailFormStyles.focus : emailFormStyles.invalid;
        for (b in currentStyle) {
            console.log("b:", b);
            emailForm.style[b] = emailFormStyles[evnt[b]];
        }
        console.log(isFocus);
        console.log(currentStyle);
        console.log("evnt:", evnt);
        console.log(typeof evnt);
        console.log(emailForm.style[b]);
        console.log(emailFormStyles[evnt[b]]);
        console.log(evnt.b);
        
        console.log(emailFormStyles);
        console.log(emailFormStyles[evnt]);
        
    })
})

function toggleStyles(emailFormEvent) {
    const currentStyle = emailFormEvent ? styles.focus : styles.invalid;
}

// function checkingEmailFormEvent(emailForm) {
//     const  emailFormEvent = emailForm.event.type === "focus";
//     toggleStyles(emailFormEvent)

// }
// for (b in emailFormStyles.invl) {
    
// }

// function invalidStyles(b, emailFormStyles) {
//     bValid.style.display = "block";
//     emailForm.style[b] = emailFormStyles.invl[b];
// }

// emailForm.addEventListener('invalid', invalidStyles(b, emailFormStyles));

// emailForm.addEventListener('invalid', (e) => {
//     bValid.style.display = "block";
//     emailForm.style[a] = emailFormStyles.invalid[a];

//     // emailForm.style.borderColor = "var(--Tomato)";
//     // emailForm.style.color = "var(--Tomato)";
//     // emailForm.style.backgroundColor = "hsla(4, 100%, 67%, 0.170)";
// });

    


for (a in emailFormStyles.focus) {
    // console.log(emailFormStyles.attention);
    // console.log(a);
}

// function focusStyles(a, emailFormStyles) {
//     // console.log(a);
//     // for (let a in emailFormStyles.attention) {
//     //     console.log(emailFormStyles.attention);
//     //     console.log(a);
//     // }
//     bValid.style.display = "none";
//     // emailForm.style.color = "var(--Dark-Slate-Grey)";
//     // emailForm.style.borderColor = "var(--Grey)";
//     // emailForm.style.backgroundColor = "white";
//     emailForm.style[a] = emailFormStyles.foc[a];
// }

// emailForm.addEventListener('focus', focusStyles(a, emailFormStyles));

// emailForm.addEventListener('focus', function() {
//     console.log(a);
//     console.log('El campo de email tiene el foco.');
//     bValid.style.display = "none";
//     emailForm.style[a] = emailFormStyles.focus[a];

//     // emailForm.style.color = "var(--Dark-Slate-Grey)";
//     // emailForm.style.borderColor = "var(--Grey)";
//     // emailForm.style.backgroundColor = "white";

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

    // checkingEmailFormEvent(emailForm)

})


