<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css?v=<?php echo time()?>">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Usuarios</title>
    <link rel="shortcut icon" href="./image/user.png" type="image/x-icon">
</head>
<body>

<div class="title">
    
    <h1>Listado de Usuarios</h1>

</div>

<div class="container-query">

    <div class="query">

        <form action="read.php"  id="searchForm" method="get">
            <label for="id">Código: </label>
            <input type="number" name="id" id="id" placeholder="Código del producto">

            <label for="name">Nombre: </label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre">

            <button type="submit"><img src="./image/search.png" alt="">Buscar</button>
        </form>

    </div>

    <div class="container">
        <div class="container-table">
            <table id="dataTable">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Aquí se cargan los datos con AJAX y read
                -->
                </tbody>
            </table>
        </div>

        <div class="create">
            <form action="#" method="POST" id="saveForm">
            <input type="hidden" name="idUpdate" id="idUpdate" value="">
            <!-- type="hidden"  oculto -->

            <label for="nombre">Nombre del Usuario:</label>
            <input type="text" id="nombreUsuario" name="nombre" required>
            <br>

            <label for="estado">Estado:</label>
            
            <select id="estado" name="estado" >
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
            </select>

            <br>
            <button type="submit">Crear Usuario</button>
            
            </form>
        </div>

    </div>

    

    

</div>


<script src="./crud.js"></script>
</body>
</html>