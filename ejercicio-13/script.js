let imagenPrincipal = document.getElementById("imagen-principal");
const atardecer2 = document.getElementById("atardecer-2");
const atardecer3 = document.getElementById("atardecer-3");
const atardecer4 = document.getElementById("atardecer-4");
let mensaje = document.querySelector("h1");

atardecer2.addEventListener("click", function mostrar(){
    imagenPrincipal.src = atardecer2.src;
    mensaje.innerText = atardecer2.alt;
    atardecer2.style.filter = "brightness(30%)"
    atardecer3.style.filter = "brightness(100%)"
    atardecer4.style.filter = "brightness(100%)"
});

atardecer3.addEventListener("click", function mostrar(){
    imagenPrincipal.src = atardecer3.src;
    mensaje.innerText = atardecer3.alt;
    atardecer2.style.filter = "brightness(100%)"
    atardecer3.style.filter = "brightness(30%)"
    atardecer4.style.filter = "brightness(100%)"
});

atardecer4.addEventListener("click", function mostrar(){
    imagenPrincipal.src = atardecer4.src;
    mensaje.innerText = atardecer4.alt;
    atardecer2.style.filter = "brightness(100%)"
    atardecer3.style.filter = "brightness(100%)"
    atardecer4.style.filter = "brightness(30%)"
});