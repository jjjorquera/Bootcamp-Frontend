function mostrarFecha() {
    let ahora = new Date();
    let diasRestantes = new Date(ahora.getFullYear() + 1, 0, 1) - ahora;

    let dias = Math.floor(diasRestantes / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diasRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diasRestantes % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diasRestantes % (1000 * 60)) / 1000);

    let fechaActual = ahora.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let mensaje = `Hoy es ${fechaActual}, y son las ${ahora.getHours()} horas, ${ahora.getMinutes()} minutos con ${ahora.getSeconds()} segundos.`;

    alert(mensaje);

    let contenedorTiempoRestante = document.getElementById('tiemporestante');
    contenedorTiempoRestante.innerHTML = `<h1>Tiempo Restante</h1>
                                          <p>${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para que termine el año.</p>`;
}

// Llamamos a la función cuando se carga la página
window.onload = function() {
    mostrarFecha();
};
