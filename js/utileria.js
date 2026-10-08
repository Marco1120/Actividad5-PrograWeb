/**
 * LIBRERÍA DE VALIDACIONES
 */

/**
 * 1. Valida el formato de un correo electrónico.
 */
const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
};

/**
 * 2. Valida que el texto contenga solo letras.
 */
const soloLetras = (texto) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
};

/**
 * 3. Valida la longitud exacta de un número.
 */
const validarLongitud = (numero, maxLongitud) => {
    const valor = String(numero).trim();
    const regex = /^\d+$/; 
    return regex.test(valor) && valor.length === maxLongitud;
};

/**
 * 4. Calcula la edad a partir de una fecha de nacimiento.
 */
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
};

/**
 * 5. Valida si una persona es mayor de edad.
 */
const esMayorDeEdad = (fechaNacimiento) => {
    return calcularEdad(fechaNacimiento) >= 18;
};

/**
 * 6. Valida la seguridad de una contraseña.
 */
const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!\%*?&.]{8,}$/;
    return regex.test(password);
};

/**
 * FUNCIÓN LIBRE 1: Formatea un número de 10 dígitos.
 */
const formatearTelefono = (numero) => {
    const valor = String(numero).trim();
    if (valor.length === 10 && /^\d+$/.test(valor)) {
        return `(${valor.substring(0,3)}) ${valor.substring(3,6)}-${valor.substring(6,10)}`;
    }
    return valor;
};

/**
 * FUNCIÓN LIBRE 2: Oculta partes de un correo electrónico.
 */
const enmascararCorreo = (correo) => {
    if (!validarCorreo(correo)) return correo; 
    const partes = correo.split('@');
    const nombre = partes[0];
    const dominio = partes[1];
    
    if (nombre.length <= 2) return `${nombre[0]}***@${dominio}`;
    return `${nombre[0]}***${nombre[nombre.length - 1]}@${dominio}`;
};