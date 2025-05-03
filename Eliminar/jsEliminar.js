document.getElementById('eliminarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('eliminar.php', {
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
