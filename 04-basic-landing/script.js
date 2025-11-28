// Esta función hace que la página se deslice suavemente a la sección seleccionada
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Evita el salto brusco
  
      const targetId = link.getAttribute('href'); // Ej: "#about"
      const section = document.querySelector(targetId);
  
      // Si la sección existe, hacemos scroll suave hacia ella
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });