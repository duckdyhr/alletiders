<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "SELECT * FROM Login";
    $result = $conn->query($sql);

    $outp="";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"memberId":"'  . $rs["memberId"] . '",';
        $outp .= '"userId":"'   . $rs["userId"]        . '",';
        $outp .= '"userPW":"'. $rs["userPW"]     . '"}';
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();

    echo($outp);
?>
