<?php
$servername = "your_mysql_hostname"; // Example: sqlXXX.epizy.com
$username = "your_mysql_username";
$password = "your_mysql_password";
$database = "your_mysql_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL to create table if not exists
$sql = "CREATE TABLE IF NOT EXISTS enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'enquiries' is ready!";
} else {
    echo "Error creating table: " . $conn->error;
}
?>
