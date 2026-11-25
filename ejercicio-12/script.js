let campo = document.getElementById("campo");
const boton = document.getElementById("boton");
let numero = document.getElementsByClassName("numero");
let resultado = document.querySelectorAll("#resultado")
let n2 = document.querySelectorAll("#n2");

boton.addEventListener("click", function generar(){
    let n = Number(campo.value);
    console.log(typeof(n));
    for (let i = 0; i <= numero.length; i++){
        numero[i].textContent = n;
    }

    for (j = 0; j <= resultado.length; j++){
        console.log(n2[j])
        resultado[j].textContent = n * n2[j];
    }
    
    
});

