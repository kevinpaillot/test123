// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('nav.links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Marque le lien de nav correspondant à la page courante
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav.links a').forEach((a) => {
  if (a.getAttribute('href') === current) a.classList.add('active');
});

// Service worker (hors-ligne)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
