<?php

include "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;

    if(!empty($id)){
        $sql = "DELETE FROM datos_usuarios WHERE id = $id";

        if($conn->query($sql)){
            echo "Registro eliminado exitosamente.";
        } else {
            echo "Error al eliminar el registro: " . $conn->error;
        }
    } else {
        echo "El ID es obligatorio para eliminar un registro.";
    }
} else {
    echo "Método de solicitud no válido.";
}