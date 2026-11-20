const numero = document.querySelector("h1")
const boton = document.getElementById("agregar")
const eliminar = document.getElementById("restablecer")


let contador = 0

boton.addEventListener('click', function aumentar(){
    contador = contador + 1;
    numero.innerText = contador
    if (contador >=10) {
        numero.style.color = "green"
        
        
    }
});
eliminar.addEventListener('click', function disminuir(){
    contador = 0
    numero.innerText = contador
    if (contador == 0){ 
        numero.style.color = "black"
        
    }

})
