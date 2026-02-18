import { Navbar } from "components/Navbar.js";
import { Hero } from "components/Hero.js";
import { initTheme } from "./theme.js";

const app = document.getElementById("app");

function render() {
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
  `;
}

render();
initTheme();
