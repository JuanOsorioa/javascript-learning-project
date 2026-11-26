const campo = document.getElementById("campo");
const boton = document.getElementById("boton");
const numero = document.querySelectorAll(".numero");
const resultado = document.querySelectorAll(".resultado");
const n2 = document.querySelectorAll(".n2");

boton.addEventListener("click", function generar() {
    const n = Number(campo.value);

    if (campo.value === "" || !Number.isInteger(n) || n < 1 || n > 10) {
        campo.setCustomValidity("Ingresa un número entero del 1 al 10");
        campo.reportValidity();
        return;
    }

    campo.setCustomValidity("");

    for (let i = 0; i < numero.length; i++) {
        numero[i].textContent = n;
        resultado[i].textContent = n * Number(n2[i].textContent);
    }
});

