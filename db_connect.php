<?php
$host = "sql311.infinityfree.com";  // Example: "sqlXXX.epizy.com"
$username = "if0_38567974";  // Example: "epiz_12345678"
$password = "Reversalred1234";
$database = "if0_38567974_enquirydatabase";  // Example: "epiz_12345678_dbname"

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
