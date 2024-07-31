let form = document.getElementById("form");
let emailForm = document.getElementById("email-form");
let button = document.getElementById("button");

function handleSubmit(e) {

    e.preventDefault()

    console.log(e);

    if ((/(^\W+)(\w+)@/i).test(e)) {
        alert("false")
    } else {
        window.location.href = "success.html"
        alert("true");
    }
    // const data = Object.fromEntries(new FormData(e.target));

    // for (const dat in data)


}

form.addEventListener('submit', handleSubmit);