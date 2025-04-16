// Simulando productos del carrito (normalmente vendrían de localStorage o backend)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar productos en el carrito
function mostrarCarrito() {
    const container = document.getElementById("carritoContainer");
    container.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        const div = document.createElement("div");
        div.className = "carrito-item";
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="item-info">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <span>$${item.precio}</span>
            </div>
        `;

        container.appendChild(div);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

// Confirmar pedido
document.getElementById("confirmarBtn").addEventListener("click", () => {
    alert("✅ ¡Pedido confirmado! Gracias por elegir Chimis 🍕");
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
});

// Vaciar carrito
document.getElementById("vaciarBtn").addEventListener("click", () => {
    if(confirm("¿Seguro que quieres vaciar el carrito?")) {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }
});

mostrarCarrito();
