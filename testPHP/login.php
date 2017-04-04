<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $dbPW = "joan9999";
    $dbname = "joan";

    $userId = $_GET['id'];
    $userPW = $_GET['pw'];
    //$userId = 'anne';
    //$userPW = 'test';

    $parameter = $_SERVER['QUERY_STRING'];

    $conn = new mysqli($servername, $username, $dbPW, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT userId, userPW, memberId FROM Login WHERE userId='";
    $sql .= $userId;
    $sql .= "' AND userPW='";
    $sql .= $userPW;
    $sql .= "';";
    
    //echo $sql . "\n";
    
    if($result = $conn->query($sql)){
        $resultArr = array();
        while($rs = $result->fetch_array(MYSQLI_ASSOC)){
        $resultArr[] = array("id"=>$rs['userId'], "pw"=>$rs['userPW'], "memberID"=>$rs['memberId']);
        }
    //var_dump($resultArr);
    //$resultArr[] = array("GETid"=>$userId, "GETpw"=>$userPW, "params"=>$parameter);
    echo json_encode($resultArr);
    }
    
    $conn->close();
?>
