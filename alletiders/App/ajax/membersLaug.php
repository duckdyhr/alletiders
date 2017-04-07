<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";

    //$laugId = $_GET['laugId'];
    $laugId = '1';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT firstname, middlename, lastname FROM Member";
    
    if($result = $conn->query($sql)) {
      $resultArr = array();
      while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $name = utf8_encode($rs['firstname'] . " " . $rs['middlename'] . " " . $rs['lastname']);
          //$resultArr[]= array("name"=> utf8_encode($rs['firstname']));
          $resultArr[]= array("name"=> $name);
      }
      
      //$resultArr[] = array("GETid"=>$userId, "GETpw"=>$userPW, "params"=>$parameter);
        //var_dump($resultArr);
        $json = json_encode($resultArr);
      echo $json;
    } else {
      //whatever...
    }
    $conn->close();
?>








