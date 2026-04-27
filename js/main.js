// ---------- Mobile nav toggle ----------
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ---------- Active nav link highlight ----------
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
});

// ---------- Year ----------
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ---------- Reveal on scroll (progressive enhancement) ----------
document.documentElement.classList.add('js-reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// Safety net: ensure everything is visible after 1.5s even if IO misses (e.g. headless screenshotters)
setTimeout(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')), 1500);

// ---------- Pricing tabs (services page) ----------
const tabs = document.querySelectorAll('.pricing-tabs button');
const panels = document.querySelectorAll('.pricing-panel');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.style.display = 'none');
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    if (target) target.style.display = 'block';
  });
});

// ---------- Contact form (no backend; demo only) ----------
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.querySelector('.form-message');
    if (msg) {
      msg.classList.add('show');
      msg.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.';
    }
    form.reset();
  });
}
