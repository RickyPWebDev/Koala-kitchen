<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = sanitizeInput($_POST["name"]);
  $email = sanitizeInput($_POST["email"]);
  $phone = sanitizeInput($_POST["phone"]);
  $message = sanitizeInput($_POST["message"]);


  
  if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo "All fields are required.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Please enter a valid email address.";
  } else {
    // Process the form data, send emails, etc.
    echo "Form submitted successfully!";
  }
}

$to = 'rickyp_2007@hotmail.co.uk';
$subject = "New Email from" . $email

if (mail($to, $subject, $message, $headers)){
  echo "Form submitted sucesfully and email sent!";

} else {
  echo "Form submitted successfully but email could not be sent.";
}



function sanitizeInput($input) {
    $input = trim($input);            // Remove leading and trailing whitespace
    $input = stripslashes($input);    // Remove backslashes (\)
    $input = htmlspecialchars($input);// Convert special characters to HTML entities
    return $input;
}
?>