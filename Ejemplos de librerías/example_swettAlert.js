// Importa la librería SweetAlert
import swal from 'sweetalert';

// Agrega un evento de clic al botón
document.getElementById('boton').addEventListener('click', function () {

    // Muestra una alerta SweetAlert
    swal({
        title: '¡Hola!',
        text: '¿Cómo estás hoy?',
        icon: 'success'
    });

});