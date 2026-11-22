let contraseña = document.getElementById("password");
let texto = document.getElementById("texto");

contraseña.addEventListener("input", function ayuda(){
    if (contraseña.value.length < 6 ){
        texto.innerText = "Contraseña muy corta"
        texto.style.backgroundColor = "red"
    }
    else if (contraseña.value.length >= 6 && contraseña.value.length <= 9) {
        texto.innerText = "Contraseña aceptable"
        texto.style.backgroundColor = "yellow"
    }
    else if (contraseña.value.length >= 10) {
        texto.innerText = "Contraseña fuerte"
        texto.style.backgroundColor = "green"
    }
})