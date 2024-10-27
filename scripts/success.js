let bEmailAdress = document.getElementById("email-adress");
let emailAdrStorVar = sessionStorage.getItem('emailAdressStorage');
const button = document.getElementById("button");


console.log(bEmailAdress);
console.log(emailAdrStorVar);
    
window.onload = function() {
    bEmailAdress.textContent = emailAdrStorVar;
}

function dismissMessage() {
    window.location.href = "index.html";
}

button.addEventListener("click", () => dismissMessage());




