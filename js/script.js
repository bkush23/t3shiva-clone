const root = document.documentElement;

function initScripts() {

  // ===============================
  // CUSTOMIZER PANEL
  // ===============================

  const customizerToggle = document.getElementById('customizerToggle');
  const customizerClose  = document.getElementById('customizerClose');
  const hamburgerBtn     = document.getElementById('hamburgerBtn');
  const searchBtn        = document.getElementById('searchBtn');
  const applyBtn         = document.getElementById('applyBtn');
  const resetBtn         = document.getElementById('resetBtn');

  if (customizerToggle)
    customizerToggle.addEventListener('click', () =>
      document.getElementById('customizer').classList.toggle('open')
    );

  if (customizerClose)
    customizerClose.addEventListener('click', () =>
      document.getElementById('customizer').classList.remove('open')
    );

  if (hamburgerBtn)
    hamburgerBtn.addEventListener('click', () =>
      document.getElementById('mobileMenu').classList.toggle('open')
    );

  if (searchBtn)
    searchBtn.addEventListener('click', () =>
      document.getElementById('searchInput').classList.toggle('open')
    );

  if (applyBtn)
    applyBtn.addEventListener('click', () => {
      root.style.setProperty('--primary',     document.getElementById('cPrimary').value);
      root.style.setProperty('--text',        document.getElementById('cText').value);
      root.style.setProperty('--font-size',   document.getElementById('fontSize').value + 'px');
      root.style.setProperty('--line-height', document.getElementById('lineHeight').value);
    });

  if (resetBtn)
    resetBtn.addEventListener('click', resetCustomizer);


  // ===============================
  // CUSTOMIZER BUTTONS
  // ===============================

  document.querySelectorAll('.customizer [data-layout]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.dataset.layout = btn.dataset.layout;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-header]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.dataset.header = btn.dataset.header;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-footer]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.dataset.footer = btn.dataset.footer;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-align]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.dataset.align = btn.dataset.align;
      setActive(btn);
    });
  });


  // ===============================
  // DYNAMIC FEATURES (IMPORTANT)
  // ===============================

  initCounters();
  initTestimonials();
}


// ===============================
// RESET CUSTOMIZER
// ===============================

function resetCustomizer() {
  root.style.setProperty('--primary', '#473BF0');
  root.style.setProperty('--text', '#151B2C');
  root.style.setProperty('--font-size', '16px');
  root.style.setProperty('--line-height', '1.6');

  root.dataset.header = 'light';
  root.dataset.footer = 'dark';
  root.dataset.layout = 'wide';
  root.dataset.align  = 'left';
}


// ===============================
// COUNTER ANIMATION (DYNAMIC SAFE)
// ===============================

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.textContent);
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}


// ===============================
// TESTIMONIAL ANIMATION
// ===============================

function initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}


// ===============================
// ACTIVE BUTTON HELPER
// ===============================

function setActive(clickedBtn) {
  clickedBtn.closest('.btn-group')
    .querySelectorAll('.c-btn')
    .forEach(btn => btn.classList.remove('active'));

  clickedBtn.classList.add('active');
}