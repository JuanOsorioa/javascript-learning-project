const botonVerde = document.getElementById("botonVerde");
const botonAmarillo = document.getElementById("botonAmarillo") 
const botonRojo = document.getElementById("botonRojo")
let luzVerde = document.getElementById("luzVerde")
let luzAmarilla = document.getElementById("luzAmarilla");
let luzRoja = document.getElementById("luzRoja");
let mensaje = document.getElementById("mensaje")

botonVerde.addEventListener("click", function encenderVerde(){
    luzVerde.style.filter = 'brightness(100%)'
    luzAmarilla.style.filter = 'brightness(30%)'
    luzRoja.style.filter = 'brightness(30%)'
    mensaje.textContent = "SIGA"

});

botonAmarillo.addEventListener("click", function encenderAmarilla(){
    luzAmarilla.style.filter = 'brightness(100%)'
    luzVerde.style.filter = 'brightness(30%)'
    luzRoja.style.filter = 'brightness(30%)'
    mensaje.textContent = "PRECAUCIÓN"
});

botonRojo.addEventListener("click", function encenderRoja(){
    luzRoja.style.filter = 'brightness(100%)'
    luzVerde.style.filter = 'brightness(30%)'
    luzAmarilla.style.filter = 'brightness(30%)'
    mensaje.textContent = "DETENGASE"
});