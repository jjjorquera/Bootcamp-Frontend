document.addEventListener('DOMContentLoaded', function() {
    const abrirBtn = document.getElementById('abrir');
    const cerrarBtn = document.getElementById('cerrar');


    const nav = document.getElementById('nav');

    abrirBtn.addEventListener('click', function() {
        nav.classList.add('visible');
    });

    cerrarBtn.addEventListener('click', function(){
        nav.classList.remove('visible');
    })
}) 
