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

    $sql = "SELECT name, id FROM Laug";
    if($result = $conn->query($sql)){
        $resultArr = array();
        while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $resultArr[]= array("name"=> utf8_encode($rs['name']), "id"=> $rs['id']); 
        }
        
        //var_dump($resultArr);
        $json = json_encode($resultArr);
        echo $json;
    }else{
        
    }

    $conn->close();
?>
