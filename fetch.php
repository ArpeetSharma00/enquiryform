<?php
include 'database.php'; // Include database connection

$sql = "SELECT name, email, message, created_at FROM enquiries ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<strong>Name:</strong> " . $row["name"] . "<br>";
        echo "<strong>Email:</strong> " . $row["email"] . "<br>";
        echo "<strong>Message:</strong> " . $row["message"] . "<br>";
        echo "<strong>Submitted At:</strong> " . $row["created_at"] . "<hr>";
    }
} else {
    echo "No enquiries yet.";
}

$conn->close();
?>
