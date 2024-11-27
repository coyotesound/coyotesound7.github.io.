function ejecutarFor() {
  console.log("Ciclo For: Contando desde 1000 hasta 5, decrementando de 5 en 5.");
  for (let i = 1000; i >= 5; i -= 5) {
    console.log(i);
  }
}

// Función para el ciclo While
function ejecutarWhile() {
  console.log("Ciclo While: Contando desde 1000 hasta 5, decrementando de 5 en 5.");
  let i = 1000;
  while (i >= 5) {
    console.log(i);
    i -= 5;
  }
}