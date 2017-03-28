<?php
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    
    echo "My first echo!\n";
try{
    $conn = new PDO("mysql:host=$servername;dbname=joan", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully\n";
    
    $sql = "INSERT INTO test(id) VALUES(3)";
    $conn->exec($sql);
    echo "sql executed successfully\n";
}catch(PDOException $e){
    echo $sql . "\n" . $e->getMessage() . "\n";
}
 $conn=null;   
?>
