document.addEventListener('DOMContentLoaded', () => {
    // Establece la fecha y hora objetivo (1 de agosto de 2025, 19:00:00, hora de Argentina)
    // Para Argentina, usamos UTC-3.
    // Creamos un objeto de fecha para la hora objetivo en UTC.
    // Restamos 3 horas (3 * 60 * 60 * 1000 milisegundos) para compensar la diferencia horaria.
    const targetDate = new Date('2025-08-01T19:00:00'); // Hora local Argentina
    
    // Función para actualizar la cuenta regresiva
    function updateCountdown() {
        const now = new Date().getTime(); // Obtiene la fecha y hora actual en milisegundos
        const distance = targetDate.getTime() - now; // Calcula la diferencia en milisegundos

        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '¡Es hora de volar a Italia!';
            document.querySelector('.airplane-icon').style.animation = 'none'; // Detiene la animación
            document.querySelector('.destination-text').innerHTML = '¡Buon viaggio!';
            return;
        }

        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra los resultados en los elementos HTML
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Llama a la función una vez al cargar para evitar un retraso inicial
    updateCountdown();
});