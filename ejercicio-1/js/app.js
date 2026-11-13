const boton = document.getElementById("botonEnvio")

function escrituraNombre() {
    nombre = document.getElementById("nombre");
    const texto = document.getElementById("texto");
    texto.textContent = `Bienvenid@ ${nombre.value}`
    nombre.value = ''

}

boton.addEventListener('click', escrituraNombre)




