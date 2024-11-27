document.addEventListener("keydown", function (event) {
    const key = event.key;
  
    // Definir colores para cada tecla
    const themes = {
      "1": { background: "#1a1a1a", color: "#ffffff" },
      "2": { background: "#ff6347", color: "#ffffff" },
      "3": { background: "#4682b4", color: "#ffffff" },
      "4": { background: "#32cd32", color: "#ffffff" },
      "5": { background: "#ffcc00", color: "#000000" },
    };
  
    // Cambiar colores si la tecla es válida
    if (themes[key]) {
      document.body.style.backgroundColor = themes[key].background;
      document.body.style.color = themes[key].color;
    }
  });
  
  // Funcionalidad de los botones
  document.getElementById("helloButton").addEventListener("click", function () {
    alert("Hola mundo");
  });
  
  document.getElementById("byeButton").addEventListener("click", function () {
    alert("Nos vemos");
  });