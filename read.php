<?php

include "db.php";

$id = isset($_GET['id']) ? intval($_GET['id']) : null;
$nombre = isset($_GET['nombre']) ? $conn->real_escape_string($_GET['nombre']) : null;

$sql = "SELECT * FROM datos_usuarios WHERE 1";

if ($id){
    $sql .= " AND id = $id";
} 
if ($nombre){
    $sql .= " AND nombre LIKE '%$nombre%'";
}

$result = $conn->query($sql);


if ($result && $result->num_rows > 0)
{
    while ($row = $result->fetch_assoc())
    {
        echo "<tr>
            <td id='id_{$row['id']}'>{$row['id']}</td>
            <td id='nombre_{$row['id']}'>{$row['nombre']}</td>
            <td id='estado_{$row['id']}'>{$row['estado']}</td>
            <td>
                <button class='btn-edit' data-id='{$row['id']}'><img src='./image/edit.png'></button>
                <button class='btn-delete' data-id='{$row['id']}'><img src='./image/delete.png'></button>
            </td>
            </tr>";
    }
} else {
    echo '<tr><td colspan="4" class="texto-centrado">No hay datos disponibles</td></tr>';
}
$conn->close();