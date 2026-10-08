// Función que se dispara al dar clic en el botón "Ingresar"
const procesarLogin = () => {
    // 1. Capturamos los datos de los inputs del HTML
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');

    // 2. Evaluamos usando las funciones que viven en utileria.js
    const correoValido = validarCorreo(correo);
    const passwordValida = validarPassword(password);

    // 3. Tomamos una decisión
    if (correoValido && passwordValida) {
        // Ocultamos el mensaje de error si estaba visible
        mensajeError.classList.add('d-none');
        
        // Guardamos el correo en el navegador para que index.html sepa quién entró
        localStorage.setItem('usuarioActivo', correo);
        
        // Redirigimos a la pantalla principal
        window.location.href = 'index.html';
    } else {
        // Si fallan las validaciones, mostramos el mensaje de error rojo
        mensajeError.classList.remove('d-none');
    }
};