export function Navbar() {
  return `
    <header class="navbar">
      <div class="container nav-container">

        <!-- Logo -->
        <div class="logo">
          <a href="index.html">T3shiva</a>
        </div>

        <!-- Main Menu -->
        <nav class="nav-menu">

          ${dropdown("Demo")}
          ${dropdown("Layouts")}
          ${dropdown("Pages")}
          ${dropdown("Elements")}
          ${dropdown("Typography")}
          ${dropdown("News")}

        </nav>

        <!-- Right Actions -->
        <div class="nav-actions">
          <div class="search-icon">🔍</div>

          <div class="dropdown lang-dropdown">
            <div class="nav-link">
              EN ▾
            </div>
            <div class="dropdown-menu">
              <a href="#">EN</a>
              <a href="#">FR</a>
              <a href="#">DE</a>
            </div>
          </div>
        </div>

      </div>
    </header>
  `;
}

function dropdown(title) {
  return `
    <div class="dropdown">
      <div class="nav-link">
        ${title} ▾
      </div>
      <div class="dropdown-menu">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </div>
  `;
}
