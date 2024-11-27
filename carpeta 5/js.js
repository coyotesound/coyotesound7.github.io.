document.addEventListener("keydown", function (event) {
  const key = event.key; // Capturamos la tecla presionada
  const outputDiv = document.getElementById("output");

  // Validar si es un número entre 0 y 9
  if (!isNaN(key) && key >= 0 && key <= 9) {
    const start = parseInt(key);
    let result = "";

    // Generar los números del rango [start, 9]
    for (let i = start; i <= 9; i++) {
      result += i + " ";
    }

    // Mostrar el resultado en la pantalla
    outputDiv.textContent = `Númerosss: ${result}`;
  } else {
    outputDiv.textContent = "ey tu hermosooo, presiona un número entre 0 y 9.";
  }
});