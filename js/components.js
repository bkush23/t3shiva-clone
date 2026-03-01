//hero

function renderHero(id, props) {
  document.getElementById(id).innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>${props.title}</h1>
          <p>${props.subtitle}</p>
          <a href="${props.buttonLink || '#'}" class="btn">
            ${props.buttonText}
          </a>
        </div>
        <div class="hero-image">
          <img src="${props.image}" alt="">
        </div>
      </div>
    </section>
  `;
}

//teaser

function renderHero(id, props) {
  document.getElementById(id).innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>${props.title}</h1>
          <p>${props.subtitle}</p>
          <a href="${props.buttonLink || '#'}" class="btn">
            ${props.buttonText}
          </a>
        </div>
        <div class="hero-image">
          <img src="${props.image}" alt="">
        </div>
      </div>
    </section>
  `;
}

//counters

function renderTeaser(id, items) {
  const html = items.map(item => `
    <div class="teaser-card">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");

  document.getElementById(id).innerHTML = `
    <section class="teaser container">
      ${html}
    </section>
  `;
}

//content-section

function renderCounters(id, items) {
  const html = items.map(item => `
    <div class="counter-box">
      <h2>${item.number}</h2>
      <p>${item.label}</p>
    </div>
  `).join("");

  document.getElementById(id).innerHTML = `
    <section class="counters container">
      ${html}
    </section>
  `;
}

//video

function renderVideo(id, props) {
  document.getElementById(id).innerHTML = `
    <section class="video-section">
      <div class="container">
        <h2>${props.title}</h2>
        <a href="${props.link}" target="_blank" class="btn">
          Watch Video
        </a>
      </div>
    </section>
  `;
}

//pricing

function renderVideo(id, props) {
  document.getElementById(id).innerHTML = `
    <section class="video-section">
      <div class="container">
        <h2>${props.title}</h2>
        <a href="${props.link}" target="_blank" class="btn">
          Watch Video
        </a>
      </div>
    </section>
  `;
}

//testimonials

function renderPricing(id, plans) {
  const html = plans.map(plan => `
    <div class="pricing-card">
      <h3>${plan.name}</h3>
      <h2>${plan.price}</h2>
      <p>${plan.desc}</p>
      <button class="btn">Choose Plan</button>
    </div>
  `).join("");

  document.getElementById(id).innerHTML = `
    <section class="pricing container">
      ${html}
    </section>
  `;
}

//process

function renderProcess(id, steps) {
  const html = steps.map((step, index) => `
    <div class="process-step">
      <span>${index + 1}</span>
      <h3>${step}</h3>
    </div>
  `).join("");

  document.getElementById(id).innerHTML = `
    <section class="process container">
      ${html}
    </section>
  `;
}

//gallery

function renderGallery(id, images) {
  const html = images.map(img => `
    <div class="gallery-item">
      <img src="${img}" alt="">
    </div>
  `).join("");

  document.getElementById(id).innerHTML = `
    <section class="gallery container">
      ${html}
    </section>
  `;
}

// cta

 function renderCTA(id, props) {
  document.getElementById(id).innerHTML = `
    <section class="cta">
      <div class="container">
        <h2>${props.text}</h2>
        <a href="${props.link || '#'}" class="btn">
          ${props.button}
        </a>
      </div>
    </section>
  `;
}