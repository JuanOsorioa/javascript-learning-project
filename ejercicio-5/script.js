const tareaEscrita = document.getElementById("tarea");
const tareaMostrada = document.getElementById("tareaPorHacer");

tareaEscrita.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        const texto = tareaEscrita.value.trim();
        if (texto === "") return;

        tareaMostrada.textContent = texto; 
        tareaEscrita.value = "";         
    }
});