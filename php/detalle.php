<?php

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$host5 = "localhost";
$user5 = "id12637202_xiimba";
$pass5 = "6x-H_qY7K[G6t48fd";
$db5 = "id12637202_xiimbal";

$conn5 = new mysqli($host5, $user5, $pass5, $db5);
if ($conn5 -> connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $conn5 -> connect_errno . ") ";
}else{
    // echo "bien";
}
$data = json_decode(file_get_contents("php://input"), true);
// var_dump($data);
$id = $data['id'];
$sql = "select * from cdmx where id=$id";
// echo $sql;
$result = $conn5->query($sql);

$data= array();

$i=0;

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        
        $data[$i] = $row;
        $i++;
    }
}

// var_dump($data);
echo json_encode($data);