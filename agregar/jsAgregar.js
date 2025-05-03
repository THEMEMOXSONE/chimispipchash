document.getElementById('productoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recargar la página

    const formData = new FormData(this);

    fetch('agregar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('mensaje').innerText = data.mensaje;
    })
    .catch(error => {
        document.getElementById('mensaje').innerText = "Error al comunicarse con el servidor.";
    });
});