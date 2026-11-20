const numero = document.querySelector("h1")
const boton = document.getElementById("agregar")
const botonE = document.getElementById("restablecer")


let contador = 0

boton.addEventListener('click', function aumentar(){
    contador = contador + 1;
    numero.innerText = contador;
    if (contador >= 10){
        numero.style.color = "green";
    }
});

botonE.addEventListener('click', function restablecemela(){
    contador = 0;
    numero.innerText = contador;
    numero.style.color = "black"
});
