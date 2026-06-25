// Cierra los demás <details> del FAQ al abrir uno (acordeón clásico)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach(other => { 
        if (other !== item) other.open = false; 
      });
    }
  });
});

// Carrusel de puntos (sección "Para ver más de cerca")
const dots = document.querySelectorAll('.dots-row .dot');

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('is-active'));
    dot.add('is-active');
  });
});
