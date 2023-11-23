<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include('database.php');
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$modelo = $data['modelo'];
$ano = $data['ano'];
$marca = $data['marca'];
$tipo = $data['tipo'];
$imagen = $data['imagen'];
$descripcion = $data['descripcion'];
$id = $data['id'];

$query = "UPDATE car SET
modelo = '$modelo',
ano = '$ano',
marca = '$marca',
tipo = '$tipo',
imagen = '$imagen',
descripcion = '$descripcion'
WHERE id = '$id'";

$result = mysqli_query($connection, $query);

if(!$result){
    die("resulta fallida");
}
?>