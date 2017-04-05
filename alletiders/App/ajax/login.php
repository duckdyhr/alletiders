<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";

//    $userId = $_GET['id'];
//    $userPW = $_GET['pw'];
    $userId = 'johan@test.com';
    $userPW = 'johan';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }   

    $sql = "SELECT userId, userPW, memberId FROM Login WHERE userId='";
    $sql .= $userId;
    $sql .= "' AND userPW='";
    $sql .= $userPW;
    $sql .= "';";

    if($result = $conn->query($sql)) {
      $resultArr = array();
      while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $resultArr[]= array("id"=>$rs['userId'], "pw"=>$rs['userPW'], "memberID"=>$rs['memberId']);
      }
      
      $resultArr[] = array("GETid"=>$userId, "GETpw"=>$userPW, "params"=>$parameter);
      echo json_encode($resultArr);
    } else {
      //whatever...
    }

    $conn->close();
    
//    $sql = "SELECT * FROM Login";
//    $result = $conn->query($sql);
//
//    $outp="";
//    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//        if ($outp != "") {$outp .= ",";}
//        $outp .= '{"memberId":"'  . $rs["memberId"] . '",';
//        $outp .= '"userId":"'   . $rs["userId"]        . '",';
//        $outp .= '"userPW":"'. $rs["userPW"]     . '"}';
//    }
//    $outp ='{"records":['.$outp.']}';
//    $conn->close();
//
//    echo($outp);
?>
