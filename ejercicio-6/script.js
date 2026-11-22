let peso = document.getElementById("peso");
let estatura = document.getElementById("estatura");
let resultado = document.getElementById("resultado")
const boton = document.getElementById("boton");

boton.addEventListener("click", function calcular() {
    if (peso.value) {
        if (estatura.value) {
            imc = peso.value / (estatura.value * estatura.value)
            resultado.innerText = imc.toFixed(2);
        }
        else{
            resultado.innerText = "Falta llenar el campo de estatura"
        }
    }
    else{
        resultado.innerText = "Falta llenar el campo de peso"
    }

})