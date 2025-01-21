<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Your email address
    $to = "immanuel.claerhout999@gmail.com";
    
    // Create email content
    $email_subject = "Contact Form: $subject";
    $email_body = "You have received a new message from your website contact form.\n\n" .
                 "Name: $name\n" .
                 "Email: $email\n" .
                 "Subject: $subject\n\n" .
                 "Message:\n$message";
    
    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: contact.html?success=1");
    } else {
        header("Location: contact.html?success=0");
    }
    exit;
}
?>