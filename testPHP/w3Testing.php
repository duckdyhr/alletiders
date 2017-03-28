<?php
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";
    
    echo "My first echo!\n";
try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Connected successfully\n";
    
    //Prepared statement
    $sql = "SELECT memberId FROM Login";
    
    $result = $conn->query($sql);
    
    echo json_encode($result) . "\n";
    
    echo "sql executed successfully\n";
}catch(PDOException $e){
    echo $sql . "\n" . $e->getMessage() . "\n";
}
 $conn=null;   
?>
