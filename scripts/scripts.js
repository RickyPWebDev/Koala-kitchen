

// Code to display the copyrite year dynamically 

var currentYear = new Date().getFullYear();

// Update the content of the current-year span element
var currentYearElement = document.getElementById("current-year");
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}
    
function onSubmit() {

    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
    document.getElementById("panel-error").textContent = "All fields are required.";
    return false;
  }

  if (!isValidEmail(email)) {
    document.getElementById("panel-error").textContent = "Please enter a valid email address.";
    return false;
  }

  return true;
}

function isValidEmail(email){

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return emailPattern.test(email);

}

function init() {
    document.getElementById("panel").textContent = "We will be contact with you shortly";
   
    if (panelElement) {
        panelElement.textContent = "We will be in contact with you shortly";
    }
}

let mybutton = document.getElementById("myBtn");