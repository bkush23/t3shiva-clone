function loadComponent(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", async function () {

  await loadComponent("navbar", "components/navbar.html");
  await loadComponent("footer", "components/footer.html");
  await loadComponent("theme-customizer", "components/customizer.html");

  // Load demo AFTER customizer is ready
  if (typeof loadDemo === "function") {
    await loadDemo("default");
  }
});