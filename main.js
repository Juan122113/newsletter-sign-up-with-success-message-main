let form = document.getElementById("form");
let emailForm = document.getElementById("email-form");
let button = document.getElementById("button");
let bValid = document.getElementById("b-Valid-id");
let bValidDisplay = bValid.getAttribute("display");
let bValidStyle = window.getComputedStyle(bValid);

function handleSubmit(e) {

    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target));

    console.log(data);

    if (!(/(^\W+)(\w+)@/i).test(data)) {
        
        window.location.href = "success.html"
        
    } else {
        bValid.style.display = "block";
        // bValidStyle.display = "block";
        // bValid.ATTRIBUTE_NODE(screen.style.display) = "block"
        // window.alert("false")
    }
    // const data = Object.fromEntries(new FormData(e.target));

    // for (const dat in data)


}

form.addEventListener('submit', handleSubmit);