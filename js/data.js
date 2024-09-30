window.onload = function() {
    // Obtener el dato desde localStorage
    const datoGuardado = localStorage.getItem('datoIngresado');

    // Mostrar el dato en el <span> con id "data"
    if (datoGuardado) {
        document.getElementById('data').textContent = datoGuardado;
    } else {
        document.getElementById('data').textContent = 'No hay datos guardados.';
    }
};
