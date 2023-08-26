

// Code to display the copyrite year dynamically 

var currentYear = new Date().getFullYear();

// Update the content of the current-year span element
var currentYearElement = document.getElementById("current-year");
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}



function init() {
    document.getElementById("panel").innerHTML = "Thank you for contacting us! we will be in contact with you shortly by phone or email.";
    
    
    let mybutton = document.getElementById("myBtn");
}
    
function onSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    init()
    
}
