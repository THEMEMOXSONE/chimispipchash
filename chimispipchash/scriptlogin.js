let intentos = 3;
let bloqueado = false;

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que se recargue la página automáticamente
    
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensajeError = document.querySelector(".mensaje");

    if (bloqueado) {
        mensajeError.textContent = "Login bloqueado. Espera 10 segundos...";
        mensajeError.style.display = "block";
        return;
    }

    // Simulación de usuario y contraseña correctos
    if (usuario === "admin@chimis.com" && password === "1234") {
        window.location.href = "menudecomida/mcmenu.html"; // Redirige si los datos son correctos
    } else {
        intentos--;
        mensajeError.style.display = "block";
        mensajeError.style.color = "red";

        if (intentos > 0) {
            mensajeError.textContent = `Credenciales incorrectas. Te quedan ${intentos} intento(s).`;
        } else {
            bloqueado = true;
            mensajeError.textContent = "Demasiados intentos. Espera 10 segundos...";
            setTimeout(() => {
                intentos = 3;
                bloqueado = false;
                mensajeError.style.display = "none";
            }, 10000);
        }
    }
});