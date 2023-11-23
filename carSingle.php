<?php

include('database.php');
$id = $_POST['element'];

$query = "SELECT * FROM car WHERE id = $id";

$result = mysqli_query($connection, $query);

if(!$result){
    die("Resulta fallida");
}

$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
        'modelo' => $row['modelo'],
        'ano' => $row['ano'],
        'marca' => $row['marca'],
        'tipo' => $row['tipo'],
        'imagen' => $row['imagen'],
        'descripcion' => $row['descripcion'],
        'id' => $row['id']
    );
}

$jsonString = json_encode($json[0]);
echo $jsonString;

?>