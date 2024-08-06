let bEmailAdress = document.getElementById("email-adress");

document.addEventListener('DOMContentLoaded', () => {
    bEmailAdress.textContent = sessionStorage.getItem('emailAdrStor');
    
})

// window.onpopstate = function(e) {
//     sessionStorage.removeItem('emailAdrStor');
// }



