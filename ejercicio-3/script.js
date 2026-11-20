let textoUsuario = document.getElementById("lectura");
let textoNuevo = document.getElementById("escritura");

textoUsuario.addEventListener('input', function escribir(){
    textoNuevo.textContent = textoUsuario.value;
})