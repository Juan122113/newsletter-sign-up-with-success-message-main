let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let bValidStyle = window.getComputedStyle(bValid);


emailForm.addEventListener("invalid", (e) => {
    bValid.style.display = "block";
    emailForm.style.borderColor = "var(--Tomato)";
    emailForm.style.color = "var(--Tomato)";
    emailForm.style.backgroundColor = "hsla(4, 100%, 67%, 0.170)";
})

emailForm.addEventListener('focus', function() {
    console.log('El campo de email tiene el foco.');
    bValid.style.display = "none";
    emailForm.style.borderColor = "var(--Grey)";
    emailForm.style.color = "var(--Dark-Slate-Grey)";
    emailForm.style.backgroundColor = "white";
});

form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    let emailValue = emailForm.value;
    console.log(emailValue);

    if (emailForm.checkValidity()) {
        console.log("true");
        sessionStorage.setItem('emailAdrStor', emailValue);
        console.log(emailValue);
        window.location.href = "success.html"
      } 

})


