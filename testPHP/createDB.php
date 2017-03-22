<?php 
    $servername = "chat.students.dk";
    $username = "joan";
    $password="joan9999";
try{
    $conn = new PDO("mysql:host=$servername;dbname=joan", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE dbFromPDO";
    $conn->exec($sql);
    echo "Database created successfully<br>";
    
}catch(PDOException $e){
    echo $sql . " failed: " . $e->getMessage();
}
$conn=null;
?>