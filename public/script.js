// JavaScript para interactuar con la página
document.getElementById('cambiarColor').addEventListener('click', function() {
    const body = document.body;
    const mensaje = document.getElementById('mensaje');

    // Cambiar el color de fondo aleatoriamente
    const colores = ['#f0f0f0', '#ffeaa7', '#fab1a0', '#a29bfe', '#fd79a8'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    body.style.backgroundColor = colorAleatorio;
    mensaje.textContent = `Color cambiado a: ${colorAleatorio}`;
});