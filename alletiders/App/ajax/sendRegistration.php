<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
    date_default_timezone_set("Europe/Copenhagen");

    $laugId = $_POST['laugId'];
    $memberId = $_POST['memberId'];
    $hours = $_POST['hours'];
    //$hours = 2;
    //$date = $_POST['date'];
    $date = "2016-04-20";
    $authorId = $_POST['author'];

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO Registration(memberId, laugId, date, hours, authorId) VALUES(";
    $sql .= $memberId;    
    $sql .= ", ";
    $sql .= $laugId;
    $sql .= ", '";
    $sql .= $date;
    $sql .= "', ";
    $sql .= $hours;
    $sql .= ", ";
    $sql .= $authorId;
    $sql .= ");";

    if($conn->query($sql) === TRUE){
        //echo json_encode(array($sql));
        
    }else{
		  //echo json_encode(array($sql));
    }
    
    $conn->close();
?>










