export function initMenu() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector(".nav-link");
    
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        // Close others
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove("open");
        });

        dropdown.classList.toggle("open");
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach(d => {
      if (!d.contains(e.target)) {
        d.classList.remove("open");
      }
    });
  });
}
