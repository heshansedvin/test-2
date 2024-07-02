<?php
session_start();

$name = "Bishan18"; // Application Name
$ownerid = "uMo5GzEQ1E"; // Owner ID

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password'];

    // Simulate KeyAuth validation (replace this with actual KeyAuth API calls)
    if ($username == 'testuser' && $password == 'testpassword') {
        $_SESSION['username'] = $username;
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid username or password"]);
    }
    exit();
}
?>
