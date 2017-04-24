<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
    date_default_timezone_set("Europe/Copenhagen");
		
		$laugErr = $memberErr = $hoursErr = $dateErr = $authorErr = "";
		$laugId = $memberId = $hours = $data = $authorId = "";
		$isError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if(empty($_POST['laugId'])){
			$laugErr = "Laug is required";
			$isError = true;
		}else{
    	$laugId = test_input($_POST['laugId']);
		}
		if(empty($_POST['memberId'])){
			$memberErr = "Member is required";
			$isError = true;
		}else{
    	$memberId = test_input($_POST['memberId']);
		}
		if(empty($_POST['hours'])){
			$hoursErr = "Hours is required";
			$isError = true;
		}else{
    	$hours = test_input($_POST['hours']);
		}
    //$hours = 2;
		if(empty($_POST['date'])){
			$dateErr = "Date is required";
			$isError = true;
		}else{
    	$date = test_input($_POST['date']);
		}
    //$date = "2016-07-20";
		if(empty($_POST['author'])){
			$authorErr = "Author is required";
			$isError = true;
		}else{
    	$authorId = test_input($_POST['author']);
		}
}
		/*Make sure input is safe data*/
		function test_input($data) {
  		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
			return $data;
		}

    $conn = new mysqli($servername, $username, $password, $dbname);
		$resultArr = array();
		if($isError){
			$resultArr['success'] = false;
			$resultArr['errorMsg'] = "Error in input";
		}else{
			// Check connection
    	if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    	}

    	$sql = "INSERT INTO Registration(memberId, laugId, date, hours, authorId) VALUES(";
    	$sql .= $memberId;    
    	$sql .= ", ";
			$sql .= $laugId;
			$sql .= ", '";
			$sql .= $date;
			$sql .= "', ";
			$sql .= $hours;
			$sql .= ", ";
			$sql .= $authorId;
			$sql .= ");";

			if($conn->query($sql) === TRUE){
				$resultArr['success'] = true;
			}else{
				$resultArr['success'] = false;
				$resultArr['errorMsg'] = "SQL: " . $sql;
			}
			echo json_encode($resultArr);
			$conn->close();	
		}
?>