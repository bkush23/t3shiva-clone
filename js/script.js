const root = document.documentElement;

function bindClickOnce(el, handler) {
  if (!el || el.dataset.clickBound === 'true') return;
  el.addEventListener('click', handler);
  el.dataset.clickBound = 'true';
}

function initScripts() {

  // ===============================
  // CUSTOMIZER PANEL
  // ===============================

  const customizerToggle = document.getElementById('customizerToggle');
  const customizerClose  = document.getElementById('customizerClose');
  const customizerPanel  = document.getElementById('customizer');
  const hamburgerBtn     = document.getElementById('hamburgerBtn');
  const searchBtn        = document.getElementById('searchBtn');
  const applyBtn         = document.getElementById('applyBtn');
  const resetBtn         = document.getElementById('resetBtn');

  bindClickOnce(customizerToggle, () => {
    if (customizerPanel) customizerPanel.classList.toggle('open');
  });

  bindClickOnce(customizerClose, () => {
    if (customizerPanel) customizerPanel.classList.remove('open');
  });

  bindClickOnce(hamburgerBtn, () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.toggle('open');
  });

  bindClickOnce(searchBtn, () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.classList.toggle('open');
  });

  bindClickOnce(applyBtn, () => {
    const primary = document.getElementById('cPrimary');
    const text = document.getElementById('cText');
    const fontSize = document.getElementById('fontSize');
    const lineHeight = document.getElementById('lineHeight');
    if (!primary || !text || !fontSize || !lineHeight) return;

    root.style.setProperty('--primary',     primary.value);
    root.style.setProperty('--text',        text.value);
    root.style.setProperty('--font-size',   fontSize.value + 'px');
    root.style.setProperty('--line-height', lineHeight.value);
  });

  bindClickOnce(resetBtn, resetCustomizer);


  // ===============================
  // CUSTOMIZER BUTTONS
  // ===============================

  document.querySelectorAll('.customizer [data-layout]').forEach(btn => {
    bindClickOnce(btn, () => {
      root.dataset.layout = btn.dataset.layout;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-header]').forEach(btn => {
    bindClickOnce(btn, () => {
      root.dataset.header = btn.dataset.header;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-footer]').forEach(btn => {
    bindClickOnce(btn, () => {
      root.dataset.footer = btn.dataset.footer;
      setActive(btn);
    });
  });

  document.querySelectorAll('.customizer [data-align]').forEach(btn => {
    bindClickOnce(btn, () => {
      root.dataset.align = btn.dataset.align;
      setActive(btn);
    });
  });


  // ===============================
  // DYNAMIC FEATURES (IMPORTANT)
  // ===============================

  initCounters();
  initTestimonials();
  initAccordion();
  initTabs();
  initSlider();
  initPlayButtons();
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


// ===============================
// ACCORDION
// ===============================

function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.accordion-content').style.maxHeight = '0';
      });

      // Open clicked item
      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}


// ===============================
// TABS
// ===============================

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  if (!tabButtons.length) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      const container = button.closest('.tabs-wrapper');

      // Remove active class from all buttons and panes
      container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      container.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked button and corresponding pane
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}


// ===============================
// SLIDER
// ===============================

function initSlider() {
  const sliders = document.querySelectorAll('.slider-wrapper');
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const items = slider.querySelectorAll('.slider-item');
    const container = slider.parentElement;
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    let currentIndex = 0;

    function showSlide(index) {
      items.forEach(item => item.classList.remove('active'));
      items[index].classList.add('active');
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
      });
    }

    // Auto-play slider (optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    }, 5000);
  });
}


// ===============================
// PLAY BUTTON / VIDEO MODAL
// ===============================

function initPlayButtons() {
  const playButtons = document.querySelectorAll('.play-btn, .video-play-icon');
  if (!playButtons.length) return;

  playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showVideoModal();
    });
  });
}

function showVideoModal() {
  // Create modal if it doesn't exist
  if (!document.getElementById('videoModal')) {
    const modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-content">
        <button class="video-modal-close" aria-label="Close video">✕</button>
        <iframe width="100%" height="600" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    `;
    document.body.appendChild(modal);

    // Close button handler
    modal.querySelector('.video-modal-close').addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  const modal = document.getElementById('videoModal');
  modal.classList.add('show');
}
