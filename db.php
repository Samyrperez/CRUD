<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error){
    die ("Error en la conexion: " . $conn->connect_error);
}
echo "Conexión exitosa";