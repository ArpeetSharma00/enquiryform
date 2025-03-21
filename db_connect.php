<?php
$host = "your_host";  // Example: "sqlXXX.epizy.com"
$username = "your_username";  // Example: "epiz_12345678"
$password = "your_password";
$database = "your_database_name";  // Example: "epiz_12345678_dbname"

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
