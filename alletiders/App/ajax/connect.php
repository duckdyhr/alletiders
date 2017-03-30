<? php
    $servername = "chat.students.dk";
    $username = "joan";
    $password = "joan9999";
    $dbname = "joan";

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
}catch(PDOException $e){
    echo $e->getMessage() . "\n";
}
    $conn=null;
?>