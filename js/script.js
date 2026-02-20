
const root = document.documentElement;



// CUSTOMIZER PANEL — open & close

document.getElementById('customizerToggle').addEventListener('click', () => {
  document.getElementById('customizer').classList.toggle('open');
});

document.getElementById('customizerClose').addEventListener('click', () => {
  document.getElementById('customizer').classList.remove('open');
});



// HAMBURGER — mobile menu

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});



// SEARCH — expand / collapse input

document.getElementById('searchBtn').addEventListener('click', () => {
  document.getElementById('searchInput').classList.toggle('open');
});



// APPLY — update CSS variables

document.getElementById('applyBtn').addEventListener('click', () => {
  root.style.setProperty('--primary',     document.getElementById('cPrimary').value);
  root.style.setProperty('--text',        document.getElementById('cText').value);
  root.style.setProperty('--font-size',   document.getElementById('fontSize').value + 'px');
  root.style.setProperty('--line-height', document.getElementById('lineHeight').value);
});



// CUSTOMIZER BUTTONS

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



document.getElementById('resetBtn').addEventListener('click', () => {
  
  root.style.setProperty('--primary',     '#473BF0');
  root.style.setProperty('--text',        '#151B2C');
  root.style.setProperty('--font-size',   '16px');
  root.style.setProperty('--line-height', '1.6');

 
  document.getElementById('cPrimary').value   = '#473BF0';
  document.getElementById('cSecondary').value = '#027B3F';
  document.getElementById('cTertiary').value  = '#E12B2B';
  document.getElementById('cText').value      = '#151B2C';
  document.getElementById('fontSize').value   = 16;
  document.getElementById('lineHeight').value = 1.6;

 
  root.dataset.header = 'light';
  root.dataset.footer = 'dark';
  root.dataset.layout = 'wide';
  root.dataset.align  = 'left';

  
  document.querySelectorAll('.customizer .btn-group').forEach(group => {
    group.querySelectorAll('.c-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === 0);
    });
  });
});



// COUNTER ANIMATION

const counters = document.querySelectorAll('.counter');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

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



function setActive(clickedBtn) {
  clickedBtn.closest('.btn-group')
    .querySelectorAll('.c-btn')
    .forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
}



// SCROLL ANIMATION — testimonials

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      testimonialObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const testimonialSection = document.querySelector('.testimonials');
if (testimonialSection) {
  testimonialObserver.observe(testimonialSection);
  
  
  document.querySelectorAll('.testimonial-card').forEach(card => {
    testimonialObserver.observe(card);
  });
}