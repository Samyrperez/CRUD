<?php

if ($_SERVER['REQUEST_METHOD']=== 'POST'){
    $id = $_POST['id'] ?? null;
    $nombre = $_POST['nombre'] ?? null;
    $estado = $_POST['estado'] ?? null;
    $fecha_actual = date('Y-m-d H:i:s');

    // verificar campos faltantes: 
    $errores = [];

    // Validando errores
    if(empty($id)) $errores[] = "ID";
    if(empty($nombre)) $errores[] = "Nombre";
    if(empty($estado)) $errores[] = "Estado";
    
    // En caso tal manejemos campos que reciban numeros podremos validar los errores de la siguiente manera: 
    //  if (empty($stock) && $stock !== '0') $errores[] = "Stock"; // Acepta 0 como válido
    // if ($precio === '' || $precio < 0) $errores[] = "Precio"; // Acepta 0, valida que no sea negativo

    if (!empty($errores)){
        echo "Faltan completar los siguientes campos: " . implode(", ", $errores);
        exit;
    }

    // Creo la consulta
    $sql = "UPDATE datos_usuarios
            SET 
                nombre = '$nombre',
                estado = '$estado',
                fecha = '$fecha_actual'
                WHERE id = $id";

    // Ejecuto la consulta
    if ($conn->query($sql) === TRUE){
        echo "Registro actualizado exitosamente.";
    } else {
        echo "Error al actualizar el registro: " . $conn->error;
    }

} else {
    echo "Método de solicitud no válido.";
}