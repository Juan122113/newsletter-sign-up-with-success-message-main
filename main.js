let form = document.getElementById("form");
const emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
const bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let bValidStyle = window.getComputedStyle(bValid);

emailForm.addEventListener("invalid", (e) => {
    bValid.style.display = "block";
})


form.addEventListener('submit', function(event) {
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

})


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

