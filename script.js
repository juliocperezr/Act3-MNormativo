let draggedItem = null;

// Arrastrar elementos
document.querySelectorAll('.drag-item').forEach(item => {

    item.addEventListener('dragstart', function(){
        draggedItem = this;
    });

});

// Soltar en casillas
document.querySelectorAll('.drop-zone').forEach(zone => {

    zone.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    zone.addEventListener('drop', function(){

        if(draggedItem){
            this.textContent = draggedItem.dataset.id;
            this.dataset.user = draggedItem.dataset.id;
        }

    });

});

// Verificar
function verificar(){

    let zonas = document.querySelectorAll('.drop-zone');
    let correctas = 0;

    zonas.forEach(zona => {

        zona.classList.remove('correct','wrong');

        if(zona.dataset.user === zona.dataset.correct){
            zona.classList.add('correct');
            correctas++;
        }else{
            zona.classList.add('wrong');
        }

    });

    let mensaje = document.getElementById('mensaje');

    if(correctas === zonas.length){
        mensaje.innerHTML = "🎉 Felicidades es correcto";
        mensaje.style.color = "green";
    }else{
        mensaje.innerHTML = "❌ Vuelve a intentarlo";
        mensaje.style.color = "red";
    }

}

// Reiniciar
function reiniciarJuego(){

    document.querySelectorAll('.drop-zone').forEach(zona => {
        zona.textContent = "";
        zona.removeAttribute('data-user');
        zona.classList.remove('correct','wrong');
    });

    document.getElementById('mensaje').innerHTML = "";

}
