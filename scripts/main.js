let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let bValidStyle = window.getComputedStyle(bValid);
const emailValue = document.getElementById("email-form").value;


window.onload = function() {
    sessionStorage.removeItem('emailAdrStor');
    
}

emailForm.addEventListener("invalid", (e) => {
    bValid.style.display = "block";
    emailForm.style.borderColor = "var(--Tomato)";
    emailForm.style.color = "var(--Tomato)";
    emailForm.style.backgroundColor = "hsla(4, 100%, 67%, 0.170)";
    // console.log(emailForm.autofocus);
    // if (!(emailForm.autofocus)) {
    //     bValid.style.display = "block";
    // // emailForm.textContent = "";
    // } else {
    //     bValid.style.display = "none";
    //}
    
})

emailForm.addEventListener('focus', function() {
    console.log('El campo de email tiene el foco.');
    bValid.style.display = "none";
    emailForm.style.borderColor = "var(--Grey)";
    emailForm.style.color = "var(--Dark-Slate-Grey)";
    emailForm.style.backgroundColor = "white";
});

// emailForm.addEventListener('blur', function() {
//     console.log('El campo de email ha perdido el foco.');
// });

form.addEventListener('submit', function(event) {
    console.log(emailValue);
    event.preventDefault();

    if (emailForm.checkValidity()) {
        window.location.href = "success.html"
        console.log("true");
      } // else {
    //     bValid.style.display = "block";
    //  }//else if (emailForm.checkValidity() == "invalid"){
    //     bValid.style.display = "block";
    //     console.log("false");
    // }

    sessionStorage.setItem('emailAdrStor', emailValue);

})

// function subscribeAndDisplay() {
//     if (emailForm) {
//         bEmailAdress.textContent = `${emailForm}`;
//     }
// }


// function handleSubmit(e) {

    // e.preventDefault()

    // const data = Object.fromEntries(new FormData(e.target));

    // console.log(data);

    // if (emailForm.checkValidity()) {
        // window.location.href = "success.html"
    // } else {
        // bValid.style.display = "block";
    // }

    // if (!(/(^\W+)(\w+)@/i).test(data)) {
        
        // window.location.href = "success.html"
        
    // } else {
        // bValid.style.display = "block";
        // bValidStyle.display = "block";
        // bValid.ATTRIBUTE_NODE(screen.style.display) = "block"
        // window.alert("false")
    // }
    // const data = Object.fromEntries(new FormData(e.target));

    // for (const dat in data)


// }

// form.addEventListener('submit', handleSubmit);

