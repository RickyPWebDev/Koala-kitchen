function init() {
    document.getElementById("panel").innerHTML = "Thank you for contacting us! we will be contact with you shortly by phone or email.";
    }
    
    let mybutton = document.getElementById("myBtn");
    
function onSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;


    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("message", message);

    init()
    
}



