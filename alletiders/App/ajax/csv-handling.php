<?php
  $servername = "chat.students.dk";
  $username = "joan";
  $password = "joan9999";
  $dbname = "joan";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  
  $sql = "SELECT Member.firstname, Member.lastname, Laug.name, Registration.hours, Registration.date FROM Registration LEFT JOIN Member ON Registration.memberId = Member.id LEFT JOIN Laug ON Registration.laugId = Laug.id ORDER BY Registration.date";
  $result = $conn->query($sql);

  $list = array();

  $outp = "";
  while($rs = $result->fetch_array(MYSQL_ASSOC)) {
    $outp = utf8_encode($rs["firstname"]) . ',';
    $outp .= utf8_encode($rs["lastname"]) . ',';
    $outp .= utf8_encode($rs["name"]) . ',';
    $outp .= $rs["hours"] . ',';
    $outp .= $rs["date"] . '';
    
    array_push($list, $outp);
    
    $outp = "";
  }
  
  $file = fopen(__DIR__ . "/../download/registreringer.csv", "w+") or die ("Unable to open file!");
  
  foreach ($list as $line) {
    fputcsv($file,explode(',',$line));
  }
  
  fclose($file);
  $conn->close();

  $myFile = __DIR__ . "/../download/registreringer.csv";
  
  if(file_exists($myFile)){
    echo 'File Exists!';
    header('HTTP/1.1 200 OK');
    header('Content-Description: File Transfer');
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment, filename="'.basename($myFile).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: '.filesize($myFile));
    readfile($myFile);
    exit;
  } else {
    echo 'File missing!';
  }
?>