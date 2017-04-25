<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
		$userId = $_GET['id'];
    $userPW = $_GET['pw'];
  //  $userId = 'johan@test.com';
   // $userPW = 'johan';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
		$resultArr = array();
    if($userId != "" && $userPW != ""){
      $sql = "SELECT userId, userPW, memberId FROM Login WHERE userId='";
      $sql .= $userId;
      $sql .= "' AND userPW='";
      $sql .= $userPW;
      $sql .= "';";  
      
			if($result = $conn->query($sql)) {
        $userArr = array();
        while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $userArr[]= array("id"=>utf8_encode($rs['userId']), "pw"=>utf8_encode($rs['userPW']), "memberID"=>utf8_encode($rs['memberId']));
        }
				if(count($userArr)>0){
					$resultArr['success'] = true;
					$resultArr['user'] = $userArr;
				}else{
					$resultArr['success'] = false;
					$resultArr['errorMsg'] = "no such user found";
				}
      } else {
				$resultArr['success'] = false;
				$resultArr['errorMsg'] = "query not a sucees, user not found";
      }
    } else {
			$resultArr['success'] = false;
			$resultArr['errorMsg'] = "userId and/or userPw not valid";
    }
		echo json_encode($resultArr);
    
		$conn->close();
?>
