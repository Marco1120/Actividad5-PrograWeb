# 🎓 Sistema de Gestión Escolar - Actividad 5

**Materia:** Programación Web  
**Alumnos:** 
Jiménez Juárez Marco Antonio
Cruz Gutiérrez Jonathan Rene 

## Descripción Breve
Este proyecto es una aplicación web de dos pantallas que simula un sistema de control escolar. Incluye un flujo de autenticación seguro y un panel de administración (Dashboard) responsivo. Se priorizó la modularidad del código separando la lógica de validación, la interfaz y los estilos, operando completamente en el lado del cliente sin requerir un backend tradicional.

---

##  Explicación y Documentación Técnica

### Framework CSS Utilizado
Se utilizó **Bootstrap 5** vía CDN. La elección de este framework permitió agilizar la maquetación responsiva mediante su sistema de grid, clases utilitarias (`d-none`, `d-flex`, `shadow`), y componentes interactivos preconstruidos (Navbar desplegable, collapse para submenús y Modales) sin necesidad de escribir JavaScript extra para las animaciones básicas. Se complementó con hojas de estilo personalizadas (`login.css` y `style.css`) para los degradados y la transición del menú lateral.

### Flujo de Acceso (Login) y Manejo de Sesión
1. El usuario ingresa sus credenciales en `login.html`.
2. El archivo `login.js` intercepta el clic y envía los datos a las expresiones regulares de `utileria.js`.
3. Si los datos son válidos, se simula la sesión guardando el correo en la memoria del navegador usando **`localStorage.setItem('usuarioActivo', correo)`**.
4. El sistema redirige automáticamente a `index.html`.

### Transferencia de Usuario al Navbar
Al cargar `index.html`, el script `app.js` se ejecuta inmediatamente. Utiliza **`localStorage.getItem('usuarioActivo')`** para recuperar el correo guardado en la pantalla anterior. Si el dato existe, manipula el DOM e inyecta este valor en el texto del botón desplegable del Navbar. Si el dato es nulo, expulsa al usuario de vuelta a `login.html`.

### Métodos Principales del Sistema
Toda la lógica matemática y de expresiones regulares (Regex) está encapsulada en `utileria.js`:
* `validarCorreo(correo)`: Verifica la estructura `texto@dominio.com`.
* `validarPassword(password)`: Exige un mínimo de 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial.
* `validarLongitud(numero, maxLongitud)`: Asegura que el número de control tenga exactamente los dígitos requeridos.
* `esMayorDeEdad(fechaNacimiento)`: Calcula la diferencia entre la fecha actual y la fecha de nacimiento para retornar un valor booleano.

---

## 🚀 Proceso de Creación (Paso a Paso)

### 1. Construcción del Login
Se estructuró una tarjeta (Card) centrada verticalmente con Bootstrap. Se programó `login.js` para capturar los valores de los inputs y pasarlos por las validaciones. Se integró una alerta visual que cambia de la clase `d-none` (oculta) a visible si el usuario falla los requisitos de seguridad.
> **Captura - Pantalla de Login:**
> ![Login Screen](URL_DE_TU_IMAGEN_LOGIN_AQUI)

### 2. Desarrollo del Sidebar (Menú Lateral)
Se diseñó un contenedor lateral utilizando Flexbox. Para la interactividad del submenú "Usuarios -> Captura", se utilizaron las clases `collapse` nativas de Bootstrap. En `app.js`, se creó la función `toggleSidebar()` que aplica un margen negativo para ocultar el menú de forma animada.
> **Captura - Sidebar abierto y cerrado:**
> ![Sidebar](URL_DE_TU_IMAGEN_SIDEBAR_AQUI)

### 3. Integración del Navbar y Usuario
Se construyó una barra superior de navegación. Del lado izquierdo se colocó el botón hamburguesa para el menú lateral, y del lado derecho un componente de tipo "Dropdown". Mediante DOM y `localStorage`, este dropdown refleja el usuario dinámicamente y contiene la función para eliminar la memoria de sesión.
> **Captura - Navbar con usuario logueado:**
> ![Navbar Usuario](URL_DE_TU_IMAGEN_NAVBAR_AQUI)

### 4. Validaciones: Número de Control
En la sección de alumnos, se agregó un input numérico. Al procesar el formulario, `app.js` manda llamar a `validarLongitud(control, 6)` desde nuestra librería. Si el usuario ingresa 5 o 7 dígitos, el sistema interrumpe el flujo con una alerta antes de proceder a evaluar la edad.
> **Captura - Alerta de validación de 6 dígitos:**
> ![Validacion Digitos](URL_DE_TU_IMAGEN_DIGITOS_AQUI)

### 5. Lógica de Fecha y Modal de Edad
Se implementó un campo de tipo `date`. El sistema extrae esta fecha y utiliza la función `calcularEdad()` para obtener el número exacto, y `esMayorDeEdad()` para determinar el estatus legal. Finalmente, se instancia el componente Modal de Bootstrap vía JavaScript (`new bootstrap.Modal(...)`), inyectando un mensaje personalizado y alterando las clases de color (`text-success` o `text-danger`) dependiendo del resultado.
> **Captura - Modal indicando mayoría/minoría de edad:**
> ![Modal Edad](URL_DE_TU_IMAGEN_MODAL_AQUI)

---

## 📸 Flujo Completo Funcionando

*A continuación se muestra el ciclo completo: desde el intento de acceso, la navegación interna, y la ejecución de validaciones.*

> ![Flujo Completo 1](URL_DE_TU_IMAGEN_FLUJO1_AQUI)
> ![Flujo Completo 2](URL_DE_TU_IMAGEN_FLUJO2_AQUI)
