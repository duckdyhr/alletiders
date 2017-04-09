<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";

    $laugId = $_GET['laugId'];
    //$laugId = '21';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT Member.firstname, Member.middlename, Member.lastname, Member.id FROM Member LEFT JOIN Member_Laug ON Member.id = Member_Laug.memberId WHERE Member_Laug.laugId = " . $laugId;
    
    if($result = $conn->query($sql)) {
      $resultArr = array();
      while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $name = utf8_encode($rs['firstname'] . " " . $rs['middlename'] . " " . $rs['lastname']);
          //$resultArr[]= array("name"=> utf8_encode($rs['firstname']));
          $resultArr[]= array("name"=> $name, "id"=> $rs['id']);
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








