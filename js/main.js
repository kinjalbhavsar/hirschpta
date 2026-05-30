/* Nav scroll shadow */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* Mobile hamburger */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
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

/* ============================================================
   Photo lightbox (only runs where a gallery/lightbox exists)
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

if (lightbox && galleryItems.length) {
  const lbImg     = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose   = document.getElementById('lightbox-close');
  const lbPrev    = document.getElementById('lightbox-prev');
  const lbNext    = document.getElementById('lightbox-next');
  let current = 0;

  const show = (i) => {
    current = (i + galleryItems.length) % galleryItems.length;
    const item = galleryItems[current];
    const full = item.dataset.full || item.querySelector('img')?.src;
    const cap  = item.dataset.caption || '';
    const alt  = item.querySelector('img')?.alt || cap;
    lbImg.src = full;
    lbImg.alt = alt;
    lbCaption.textContent = cap;
  };

  const open = (i) => {
    show(i);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };
  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item, i) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('click', (e) => { e.preventDefault(); open(i); });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    });
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft')  show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
}
