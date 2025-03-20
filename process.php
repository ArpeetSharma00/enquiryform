<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com"; // Change this to your email
    $headers = "From: $email\r\nReply-To: $email";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your inquiry has been sent successfully!";
    } else {
        echo "Failed to send your inquiry. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
