$(document).ready(function(){
// -----------------------------------------------------------
    // READ
    all("", "");

    $('#searchForm').on('submit' , function(e){
        e.prevenDefault();
        $("#dataTable tbody").html("");

        // obtener los valores de los campos de entrada
        let id = $('#id').val();
        let nombre = $('#nombre').val();
        all(id, nombre);
    });

    function all(id, nombre){
        $.ajax({
            url: "read.php",
            method: 'GET',
            data: {
                id: id,
                nombre: nombre
            },
            success: function(response){
                $('#dataTable tbody').html(response);
            },
            error: function(){
                $("#searchResults").html('<p>Ocurrió un error al procesar la solicitúd.</p>');
            }
        });
    };
// -------------------------------------------------------------


    function limpiarFormulario() {
        $('#nombreUsuario').val("");
        $('#estado').val(""); 
        $("#idUpdate").val("");    
        $('#saveForm button[type="submit"]').text('Crear Producto');   
    };

    // -----------------------------------------------------
    // Función CREATE
    $('#saveForm').on('submit' , function (e){
        e.preventDefault();

        let id = $('#idUpdate').val();
        let nombre = $('#nombreUsuario').val();
        let estado = $('#estado').val();

        $.ajax({
            url: "create.php",
            method: 'POST',
            data: {
                id: id,
                nombre: nombre,
                estado: estado
            }, 
            success: function(response){
                limpiarFormulario();

                // limpiar la tabla actual y actualizarla
                $("#dataTable tbody").html("");
            },
            error: function(){
                $('#searchResults').html('<p>Ocurrio un error al procesar la solicitud. </p>');
            }
        });
    });

// -------------------------------------------------------------------







})