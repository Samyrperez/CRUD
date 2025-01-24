<?php

include "db.php";

// capturamos los datos del fomr saveForm

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nombre = $_POST['nombre'];
    $estado = $_POST['estado'];
    $fecha_actual = date('Y-m-d H:i:s');

    // construimos la consulta

    if(!empty($nombre) && !empty($estado)){
        $sql = "INSERT INTO datos_usuarios (nombre, estado, fecha) VALUES ('$nombre', '$estado', '$fecha_actual')";

        if ($conn->query($sql) === TRUE){
            echo true;
        } else {
            echo false;
        }
    } else {
        echo false;
    }

} else {
    echo false;
}
