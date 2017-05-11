<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	$servername = "chat.students.dk";
	$username = "joan";
	$password = "joan9999";
	$dbname = "joan";
	
	$memberId = $_GET['id'];
	//$memberId = 1;
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT Laug.name, Laug.id FROM Laug ";
	$sql .= "LEFT JOIN Member_Laug ON Laug.id=Member_Laug.laugId ";
	$sql .= "WHERE Member_Laug.memberId=";
	$sql .= $memberId;

	if($result = $conn->query($sql)) {
    $resultArr = array();
		while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			$resultArr[]= array("name"=> utf8_encode($rs['name']), "id"=> $rs['id']); 
    }
		echo json_encode($resultArr);
	}
?>










