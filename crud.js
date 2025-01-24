$(document).ready(function(){
// -----------------------------------------------------------
    // READ---
    all("", "");

    $('#searchForm').on('submit' , function(e){
        e.preventDefault();
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

        let URL = "create.php";
        if (id != ""){
            URL = "update.php";
        }

        $.ajax({
            url: URL,
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
                all("", "");
            },
            error: function(){
                $('#searchResults').html('<p>Ocurrio un error al procesar la solicitud. </p>');
            }
        });
    });

    
// -------------------------------------------------------------------

// Función  complementaria para el UPTADE: Primero uso este antes de actualizar
    $(document).on('click', '.btn-edit' , function(){
        const id = $(this).data('id');
        console.log('ID capturado: ',id);

        const nombre = $(`#nombreUsuario_${id}`).text(); // Recuperamos el valor del <td> de la tabla
        const estado = $(`#estado_${id}`).text();

        $("#idUpdate").val(id);
        $("#nombre").val(nombre);
        $("#estado").val(estado);
        $('#saveForm button[type="submit"]').text('Actualizar Usuario');
    });





})