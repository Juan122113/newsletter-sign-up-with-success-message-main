let form = document.getElementById("form");
let emailForm = document.getElementById("email-form");
let button = document.getElementById("button");

function handleSubmit(e) {

    e.preventDefault()

    if ((/\w+\W+@\w+\W+/).test(e)) {
        window.location.href = "success.html"
        alert(true);
    } else {
        
    }
    // const data = Object.fromEntries(new FormData(e.target));

    // for (const dat in data)


}

form.addEventListener('submit', handleSubmit);