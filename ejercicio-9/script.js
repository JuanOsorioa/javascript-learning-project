let nombre = document.getElementById("nombre");
let profesion = document.getElementById("profesion");
let foto = document.getElementById("foto");
let nombreCard = document.getElementById("nombreCard");
let profesionCard = document.getElementById("profesionCard");
let fotoCard = document.getElementById("fotoCard")

nombre.addEventListener("input", function agregarNombre(){
    nombreCard.innerText = nombre.value;
});

profesion.addEventListener("input", function agregarProfesion(){
    profesionCard.innerText = profesion.value;
});

foto.addEventListener("input", function agregarFoto() {
    fotoCard.src = foto.value;
    fotoCard.style.maxWidth = "100px";
    fotoCard.style.maxHeight = "auto";
})

