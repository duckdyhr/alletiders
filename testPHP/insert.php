<?php
    $servername = "chat.students.dk/phpmyadmin";
    $username = "joan";
    $password="joan9999";

try{
    $conn=new PDO("mysql:host=$servername;port=44444;dbname=joan", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql="INSERT INTO person (id, name) VALUES (4, 'LARS');";
    $conn->exec($sql);
    $echo "LARS inserted, woop!";
}catch(PDOException $e){
    echo "Failed";
}
?>