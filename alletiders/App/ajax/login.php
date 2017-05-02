<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
		$userId = $_GET['id'];
    $userPW = $_GET['pw'];
    //$userId = 'johan@test.com';
    //$userPW = 'johan';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

//	SELECT Login.userId, Login.userPW, memberId, Member.isCustodian FROM Login
//	LEFT JOIN Member ON Login.memberId=Member.id
//    WHERE userId='johan@test.com' 
//    	AND userPW='johan' 
		
		$resultArr = array();
    if($userId != "" && $userPW != ""){
      $sql = "SELECT Login.userId, Login.memberId, ";
			$sql .= "Member.firstname, Member.middlename, Member.lastname, Member.isCustodian ";
			$sql .= "FROM Login ";
			$sql .= "LEFT JOIN Member ON Login.memberId=Member.id ";
			$sql .= "WHERE userId='";
      $sql .= $userId;
      $sql .= "' AND userPW='";
      $sql .= $userPW;
      $sql .= "';";  
      
			if($result = $conn->query($sql)) {
        $userArr = array();
        while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
          $userArr[]= array("id"=>utf8_encode($rs['userId']), 
														"memberID"=>utf8_encode($rs['memberId']),
													 	"isCustodian"=>utf8_encode($rs['isCustodian']),
													 "name"=>utf8_encode($rs['firstname'] . " " . $rs['middlename'] . " " . $rs['lastname']));
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
