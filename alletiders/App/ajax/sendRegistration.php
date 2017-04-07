<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
    $laugId = 1;
    $memberId = 1;
    $hours = 2
    $date = date("Y/m/d");
    $author = 1;
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO table Registration() VALUES()";
    $conn->close();
?>