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
	
//mangler author
	$sql = "SELECT Member.firstname, Member.lastname, Member.isCustodian, Laug.name AS laug, Laug.theme, Registration.hours, Registration.date FROM Member LEFT JOIN Registration ON Member.id = Registration.memberId LEFT JOIN Laug ON Laug.id = Registration.laugId";
	
	$resultArr = array();
	$docsArr = array();
	if($result = $conn->query($sql)){	
		while($rs = $result->fetch_array(MYSQLI_ASSOC)){
			$docsArr[] = array("name"=> utf8_encode($rs['firstname'] . " " . $rs['lastname']),
													"isCustodian"=>$rs['isCustodian'],
													"laug"=>utf8_encode($rs['laug']),
													"theme"=>utf8_encode($rs['theme']),
													"hours"=>$rs['hours'],
													"date"=>$rs['date']);
		}
		$resultArr['success'] = true;
		$resultArr['docs'] = $docsArr;
		//var_dump($resultArr);
		$json = json_encode($resultArr);
		echo $json;
	}else{
		$resultArr['success'] = false;
		$resultArr['errorMsg'] = 'query failed';
	}
	$conn->close();
?>