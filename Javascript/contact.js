//getting elements//
let popup = document.getElementById("popup");
let field = document.getElementById("field");
let field2 = document.getElementById("details");
let heading = document.getElementById("headingall");
const form = document.getElementById("form");

// adding event listener //
form.addEventListener("submit", () => {
    popup.classList.add("open-popup");
    field.classList.add("remove-field");
    field2.classList.add("remove-field");
    heading.classList.add("remove-field");
    document.getElementById("name-input").innerHTML = document.getElementById("name").value;
    document.getElementById("email-input").innerHTML = document.getElementById("email").value;
})


//* closes the pop up //
function closePopup(){
    popup.classList.remove("open-popup")
}

