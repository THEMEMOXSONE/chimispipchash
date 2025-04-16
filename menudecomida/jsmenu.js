// Botones para voltear
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.classList.add("flipped");
  });
});

// Botones para confirmar
const confirmButtons = document.querySelectorAll(".confirm-btn");

confirmButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const checkboxes = card.querySelectorAll("input[type='checkbox']:checked");
    let extrasSeleccionados = [];

    checkboxes.forEach(c => {
      extrasSeleccionados.push(c.value);
    });

    if (extrasSeleccionados.length > 0) {
      alert(`Añadido con: ${extrasSeleccionados.join(", ")}`);
    } else {
      alert("Añadido sin cambios.");
    }

    // Regresa la tarjeta a su estado original
    card.classList.remove("flipped");
  });
});
