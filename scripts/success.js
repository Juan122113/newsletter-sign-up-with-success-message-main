let bEmailAdress = document.getElementById("email-adress");
let emailAdrStorVar = sessionStorage.getItem('emailAdrStor');



console.log(bEmailAdress);
console.log(emailAdrStorVar);
    
window.onload = function() {
    bEmailAdress.textContent = emailAdrStorVar;
}




