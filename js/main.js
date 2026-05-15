/* Nav scroll shadow */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* Mobile hamburger */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* Active nav link — driven by data-page on <body> */
const currentPage = document.body.dataset.page;
if (currentPage) {
  navLinks.querySelectorAll('a').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
  });
}

/* Reveal on scroll */
const revealEls = document.querySelectorAll(
  '.news-card, .event-item, .board-card, .program-card, .vol-card, ' +
  '.benefit-card, .donate-method-card, .tier-card, .result-card, ' +
  '.step-card, .community-card, .stat-item, .faq-item'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => observer.observe(el));
