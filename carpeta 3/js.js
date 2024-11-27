let counter = 0; // Inicializamos el contador en 0

// Función para sumar 1
document.getElementById("addButton").addEventListener("click", function () {
  counter += 1;
  console.log(`Resultado actual: ${counter}`);
});

// Función para restar 1
document.getElementById("subtractButton").addEventListener("click", function () {
  counter -= 1;
  console.log(`Resultado actual: ${counter}`);
});