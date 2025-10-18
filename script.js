// Esperar a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {

  // ==== EFECTO SCROLL SUAVE ENTRE SECCIONES ====
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const destino = document.querySelector(enlace.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==== EFECTO FADE-IN AL HACER SCROLL ====
  const secciones = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        obs.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.2
  });

  secciones.forEach(seccion => observer.observe(seccion));
});

// ==== MENÚ HAMBURGUESA ====
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// ==== BOTÓN "COMPRAR AHORA" ====
const numeroWhatsApp = "573001234567"; // 👈 Cambia este número al tuyo (sin +, con código de país)

let saborSeleccionado = null;

// Detectar clic en un sabor
document.querySelectorAll(".sabores span").forEach(sabor => {
  sabor.addEventListener("click", () => {
    // Quitar selección previa
    document.querySelectorAll(".sabores span").forEach(s => s.classList.remove("activo"));
    // Marcar nuevo sabor
    sabor.classList.add("activo");
    saborSeleccionado = sabor.dataset.sabor;
  });
});

// Al hacer clic en "Comprar ahora"
const botonComprar = document.querySelector(".btn-comprar");
botonComprar.addEventListener("click", () => {
  if (!saborSeleccionado) {
    alert("Por favor, selecciona un sabor antes de comprar 💨");
    return;
  }

  const mensaje = `Hola! 💨 Estoy interesado en el *PRIV Bar Turbo 15000 puffs* sabor *${saborSeleccionado}*. ¿Está disponible?`;
  const url = `https://wa.me/3026661145?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
