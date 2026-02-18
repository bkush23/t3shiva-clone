export function initMenu() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close others
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("open");
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("open"));
  });
}
