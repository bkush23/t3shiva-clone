class NavItem extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Menu";

    this.innerHTML = `
      <li class="nav-item">
        <a href="#">
          ${title} <span class="arrow"></span>
        </a>
        <ul class="dropdown">
          ${this.innerHTML}
        </ul>
      </li>
    `;
  }
}

customElements.define("nav-item", NavItem);