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
  const customizerClose = document.getElementById('customizerClose');
  const customizerPanel = document.getElementById('customizer');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const searchBtn = document.getElementById('searchBtn');
  const applyBtn = document.getElementById('applyBtn');
  const resetBtn = document.getElementById('resetBtn');

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

  function updateStyles() {
    const primary = document.getElementById('cPrimary');
    const secondary = document.getElementById('cSecondary');
    const tertiary = document.getElementById('cTertiary');
    const text = document.getElementById('cText');
    const fontSize = document.getElementById('fontSize');
    const lineHeight = document.getElementById('lineHeight');

    if (primary) root.style.setProperty('--primary', primary.value);
    if (secondary) root.style.setProperty('--secondary', secondary.value);
    if (tertiary) root.style.setProperty('--tertiary', tertiary.value);
    if (text) root.style.setProperty('--text', text.value);
    if (fontSize) root.style.setProperty('--font-size', fontSize.value + 'px');
    if (lineHeight) root.style.setProperty('--line-height', lineHeight.value);
  }

  // Bind live updates (Set OnChange/OnInput)
  ['cPrimary', 'cSecondary', 'cTertiary', 'cText', 'fontSize', 'lineHeight'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateStyles);
    }
  });

  bindClickOnce(applyBtn, updateStyles);

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
  root.style.setProperty('--secondary', '#027B3F');
  root.style.setProperty('--tertiary', '#E12B2B');
  root.style.setProperty('--text', '#151B2C');
  root.style.setProperty('--font-size', '16px');
  root.style.setProperty('--line-height', '1.6');

  root.dataset.header = 'light';
  root.dataset.footer = 'dark';
  root.dataset.layout = 'wide';
  root.dataset.align = 'left';
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
  const cards = document.querySelectorAll('.testimonials .testimonial-card');
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

const featuredJobsData = [
  {
    image: "/images/company-1.png",
    title: "UI/UX Designer",
    company: "Envato",
    location: "Remote",
    type: "Full Time"
  },
  {
    image: "/images/company-2.png",
    title: "Frontend Developer",
    company: "Google",
    location: "USA",
    type: "Full Time"
  },
  {
    image: "/images/company-3.png",
    title: "Backend Developer",
    company: "Microsoft",
    location: "Canada",
    type: "Part Time"
  }
];


const homeNewsData = [
  {
    image: "/images/service-1.jpg",
    date: "Dec 15, 2024",
    title: "How to build a headless TYPO3 site",
    text: "Learn the basics of headless CMS and why it's the future of web development."
  },
  {
    image: "/images/service-2.jpg",
    date: "Jan 10, 2025",
    title: "React vs Vue: Which one is better?",
    text: "A comprehensive comparison between two of the most popular frontend frameworks."
  },
  {
    image: "/images/service-3.jpg",
    date: "Feb 05, 2025",
    title: "Understanding Next.js Server Components",
    text: "Dive deep into the new way of building React applications with Server Components."
  }
];

const jobNewsData = [
  {
    image: "/images/News-1.jpg",
    date: "Mar 01, 2025",
    title: "Top IT Jobs in 2025",
    text: "Discover the fastest growing tech jobs this year, apply now."
  },
  {
    image: "/images/News-2.jpg",
    date: "Mar 10, 2025",
    title: "Remote Work Opportunities",
    text: "Why companies are hiring more remote developers."
  },
  {
    image: "/images/News-3.jpg",
    date: "Mar 18, 2025",
    title: "How to Crack Technical Interviews",
    text: "Important preparation tips for software engineers."
  }
];

const educationNewsData = [
  {
    image: "/images/News-1.jpg",
    date: "Mar 01, 2025",
    title: "Top IT Jobs in 2025",
    text: "Discover the fastest growing tech jobs this year, apply now."
  },
  {
    image: "/images/News-2.jpg",
    date: "Mar 10, 2025",
    title: "Remote Work Opportunities",
    text: "Why companies are hiring more remote developers."
  },
  {
    image: "/images/News-3.jpg",
    date: "Mar 18, 2025",
    title: "How to Crack Technical Interviews",
    text: "Important preparation tips for software engineers."
  }
];

function renderNews(data) {

    if (!data) return;
    

  const grid = document.getElementById("newsGrid");
  // console.log("News grid:", grid);

  if (!grid) {
    setTimeout(renderNews, 300);
    return;
  }

  grid.innerHTML = data.map(news => `
    <div class="news-card">
      <div class="news-img">
        <img src="${news.image}" alt="">
      </div>
      <div class="news-content">
        <span class="news-date">${news.date}</span>
        <h3>${news.title}</h3>
        <p>${news.text}</p>
        <a href="#" class="btn-link">Read More →</a>
      </div>
    </div>
  `).join("");

}

function renderJobs(data) {
  const grid = document.getElementById("jobsGrid");
  if (!grid) return;

  grid.innerHTML = data.map(job => `
    <div class="job-card">
      <div class="job-company">
        <img src="${job.image}" alt="">
      </div>

      <div class="job-info">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <span>${job.location}</span>
        <span>${job.type}</span>
      </div>
    </div>
  `).join("");
}

function loadPageNews() {

  const path = window.location.pathname;

  if (path.includes("education")) {
    renderNews(educationNewsData);
  } else if (path.includes("job")) {
    renderNews(jobNewsData);
  } else {
    renderNews(homeNewsData);
  }

}

loadPageNews();

function initNews() {

  const grid = document.getElementById("newsGrid");

  if (!grid) {
    setTimeout(initNews, 100);
    return;
  }

  loadPageNews();

}

initNews();

function initJobs() {
  const grid = document.getElementById("jobsGrid");

  if (!grid) {
    setTimeout(initJobs, 100);
    return;
  }

  renderJobs(featuredJobsData);
}

initJobs();

const toggle = document.querySelector("#priceToggle");

if(toggle){
  toggle.addEventListener("change", function(){

    const prices = document.querySelectorAll(".pricing-section .price");

    prices.forEach(price => {

      const monthly = price.dataset.month;
      const yearly = price.dataset.year;

      if(toggle.checked){
        price.innerHTML = "$" + yearly + " <span>/yr</span>";
      }else{
        price.innerHTML = "$" + monthly + " <span>/mo</span>";
      }

    });

  });
}

function initTabs(){

const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab=>{
tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
panels.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");
document.getElementById(tab.dataset.tab).classList.add("active");

});
});

}

document.addEventListener("DOMContentLoaded", initTabs);
