document.getElementById('buttonText').addEventListener('click', function() {
    // Capturar el valor del input
    const inputText = document.getElementById('inputText').value;
    
    // Guardar el valor en localStorage
    localStorage.setItem('datoIngresado', inputText);

    // Confirmar que el valor ha sido guardado
    alert('Dato guardado en localStorage!');
});
