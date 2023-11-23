<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

    include('database.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if(isset($data['id'])){
        $modelo = $data['modelo'];
        $ano = $data['ano'];
        $marca = $data['marca'];
        $tipo = $data['tipo'];
        $imagen = $data['imagen'];
        $description = $data['descripcion'];
        $query ="INSERT into car 
        (modelo, 
        ano, 
        marca, 
        tipo, 
        imagen, 
        descripcion
        ) VALUES 
        ('$modelo', 
        '$ano', 
        '$marca', 
        '$tipo', 
        '$imagen', 
        '$description'
        )";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('La consulta a fallado');
        }
        echo $result;
        echo "insercion en la base de datos satisfactoriamente";
    } else {
        echo "No se recibieron los datos'";
    }
?>

