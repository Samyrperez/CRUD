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
// Boton para recargar la pagina
    $("#reload").click(function(){
        all();
    });
// -------------------------------------------------------------


    function limpiarFormulario() {
        $('#nombreUsuario').val("");
        $('#estado').val(""); 
        $("#idUpdate").val("");    
        $('#saveForm button[type="submit"]').text('Crear Producto');   
    };

    // -----------------------------------------------------
    // Función CREATE y UPDATE
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

    


// Función  complementaria para el UPTADE: Primero uso este antes de actualizar
    $(document).on('click', '.btn-edit' , function(){
        const id = $(this).data('id');
        console.log('ID capturado: ',id);

        const nombre = $(`#nombre_${id}`).text(); // Recuperamos el valor del <td> de la tabla
        const estado = $(`#estado_${id}`).text();

        $("#idUpdate").val(id);
        $("#nombreUsuario").val(nombre);
        $("#estado").val(estado);
        $('#saveForm button[type="submit"]').text('Actualizar Usuario');
    });
// -------------------------------------------------------------------

// DELETE

    $(document).on('click', '.btn-delete' , function(){
        const id = $(this).data('id'); // Obtener el valor del boton precionado
        console.log('ID capturado:', id);

        // Pedir una confirmacion antes de eliminar
        if (confirm("¿Estas seguro que deseas eliminar este usuario?")){
            $.ajax({
                url: "delete.php",
                method: "POST",
                data: {id: id},
                success: function(response){
                    console.log("Respuesta: ", response);
                    if (response === 'Registro eliminado exitosamente.') {
                        $("#dataTable tbody").html("");
                        all("", ""); 
                    } else {
                        alert("Error al eliminar el producto: " + response);
                    }
                },
                error: function(){
                    console.log("Error al realizar la solicitud.");
                    alert('Hubo un error al procesar la solicitud.');
                }
            });
        }
    });

});