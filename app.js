// Selección de elementos del DOM
const botonTema = document.getElementById('btn-tema');
const botonVuelos = document.getElementById('btn-vuelos');
const cuerpoPagina = document.body;

// 1. Cambiar entre Modo Claro y Oscuro
botonTema.addEventListener('click', function() {
    cuerpoPagina.classList.toggle('dark-theme');

    if (cuerpoPagina.classList.contains('dark-theme')) {
        botonTema.textContent = "☀️ Claro";
    } else {
        botonTema.textContent = "🌙 Oscuro";
    }
});

// 2. Acción para el botón de Buscar Vuelos
botonVuelos.addEventListener('click', function() {
    alert("✈️ Buscando los mejores vuelos disponibles en TravelNow...");
});