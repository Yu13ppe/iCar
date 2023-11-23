<?php

include('database.php');
$query = "SELECT * from car";
$result = mysqli_query($connection, $query);

if (!$result) {
    die("Consulta fallida" . mysqli_error($connection));
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'id' => $row['id'],
        'modelo' => $row['modelo'],
        'ano' => $row['ano'],
        'marca' => $row['marca'],
        'tipo' => $row['tipo'],
        'imagen' => $row['imagen'],
        'descripcion' => $row['descripcion']
    );
}
$jsonString = json_encode($json);
echo $jsonString
?>
    