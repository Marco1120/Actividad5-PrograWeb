// --- 1. SEGURIDAD DE SESIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogueado = localStorage.getItem('usuarioActivo');
    
    if (!usuarioLogueado) {
        // Si no hay sesión en memoria, lo regresa a la pantalla de login
        window.location.href = 'login.html';
    } else {
        // Imprime el correo guardado en la barra superior
        document.getElementById('nombreUsuarioNavbar').textContent = usuarioLogueado;
    }
});

const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo');
    window.location.href = 'login.html';
};

// --- 2. CONTROL DEL SIDEBAR Y PANTALLAS ---
const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('oculto');
};

const mostrarPantalla = (idPantalla) => {
    // Oculta ambas pantallas
    document.getElementById('pantallaUsuarios').classList.add('d-none');
    document.getElementById('pantallaAlumnos').classList.add('d-none');
    // Muestra solo la que se solicitó en el menú
    document.getElementById(idPantalla).classList.remove('d-none');
};

// --- 3. VALIDACIÓN DE USUARIOS (Usa utileria.js) ---
const registrarUsuario = () => {
    const correo = document.getElementById('correoCaptura').value;
    const password = document.getElementById('passCaptura').value;

    if (!validarCorreo(correo)) {
        alert("El correo ingresado no tiene un formato válido.");
        return;
    }
    if (!validarPassword(password)) {
        alert("La contraseña no cumple con los requisitos de seguridad.");
        return;
    }
    
    alert("Usuario registrado correctamente.");
    document.getElementById('formUsuarios').reset();
};

// --- 4. VALIDACIÓN DE ALUMNOS Y MODAL (Usa utileria.js) ---
const verificarAlumno = () => {
    const control = document.getElementById('numControl').value;
    const fechaNac = document.getElementById('fechaNacimiento').value;

    // Validación de longitud estricta (6 dígitos) usando tu función
    if (!validarLongitud(control, 6)) {
        alert("El número de control debe ser exactamente de 6 dígitos numéricos.");
        return;
    }

    if (!fechaNac) {
        alert("Debes seleccionar una fecha de nacimiento.");
        return;
    }

    // Calcular edad y si es mayor con tus funciones
    const edad = calcularEdad(fechaNac);
    const esMayor = esMayorDeEdad(fechaNac);
    
    // Preparar el mensaje para el Modal
    const mensaje = document.getElementById('mensajeModalEdad');
    if (esMayor) {
        mensaje.textContent = `El alumno con control ${control} tiene ${edad} años. ES MAYOR DE EDAD.`;
        mensaje.classList.add('text-success');
        mensaje.classList.remove('text-danger');
    } else {
        mensaje.textContent = `El alumno con control ${control} tiene ${edad} años. ES MENOR DE EDAD.`;
        mensaje.classList.add('text-danger');
        mensaje.classList.remove('text-success');
    }

    // Activar el Modal de Bootstrap
    const modalBootstrap = new bootstrap.Modal(document.getElementById('modalEdad'));
    modalBootstrap.show();
};