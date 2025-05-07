document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página automáticamente
    
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensajeError = document.querySelector(".mensaje");

    // Simulación de usuario y contraseña correctos
    if (usuario === "admin@chimis.com" && password === "1234") {
        window.location.href = "menudecomida/mcmenu.html"; // Redirige si los datos son correctos
    } else {
        mensajeError.style.display = "block"; // Muestra el mensaje de error
    }
});
