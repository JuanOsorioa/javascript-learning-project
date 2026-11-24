const boton = document.getElementById("boton");
let nombre = document.getElementById("nombre");
let mensajeNombre = document.getElementById("mensajeNombre");
let correo = document.getElementById("correo");
let mensajeCorreo = document.getElementById("mensajeCorreo")
let mensaje = document.getElementById("mensaje");
let edad = document.getElementById("edad");
const mensajeEdad = document.getElementById("mensajeEdad")
boton.addEventListener("click", function registro() {
    if (nombre.value) {
        if (correo.value) {
            if (edad.value) {
                mensaje.innerText = "Registro exitoso";
                mensaje.style.color = "Green"
                mensaje.style.fontSize = "100px"
            }
            else {
                mensajeEdad.innerText = "Es necesario ingresar una edad";
                mensajeEdad.style.color = "red"
            }

        }
        else {
            mensajeCorreo.innerText = "Es necesario agregar un correo electrónico";
            mensajeCorreo.style.color = "red"
        }
    }
    else {
        mensajeNombre.innerText = "Es necesario agregar un nombre"
        mensajeNombre.style.color = "red"
    }
})