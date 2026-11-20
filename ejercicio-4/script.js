let selector = document.getElementById('select');
let body = document.getElementById('cuerpo');

selector.addEventListener('change', function(){
    body.style.backgroundColor = selector.value;
})