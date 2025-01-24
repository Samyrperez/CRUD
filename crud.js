$(document).ready(function(){

    function limpiarFormulario() {
        $('#nombreUroducto').val("");
        $('#estado').val(""); 
        $("#idUpdate").val("");    
        $('#saveForm button[type="submit"]').text('Crear Producto');   
    };

    // Función CREATE
    $('#saveForm').on('submit' , function (e){
        e.preventDefault();

        let id = $('#idUpdate').val();
        let nombre = $('#nombreCompleto').val();
        let estado = ('#estado').val();

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
    








})