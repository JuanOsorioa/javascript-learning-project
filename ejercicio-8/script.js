let campo = document.getElementById("campo");
const boton = document.getElementById("boton");
let lista = document.getElementById("lista");
const aviso = document.getElementById("aviso");

boton.addEventListener("click", function agregarItem() {
    let item = campo.value;
    if (item) {
        lista.innerHTML = lista.innerHTML += `<li>${item}</li>`;
        campo.value = null;
        aviso.innerText = null
    }
    else{
        aviso.innerText = "Es necesario agregar el elemiento antes de presionar el botón";
    };
});