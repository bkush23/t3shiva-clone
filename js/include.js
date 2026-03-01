document.querySelectorAll("[data-include]").forEach(async (el) => {
  const file = el.getAttribute("data-include");

  const response = await fetch(file);
  let html = await response.text();

  // Replace placeholders with data attributes
  Array.from(el.attributes).forEach(attr => {
    if (attr.name.startsWith("data-") && attr.name !== "data-include") {
      const key = attr.name.replace("data-", "");
      const value = attr.value;
      html = html.replaceAll(`{{${key}}}`, value);
    }
  });

  el.outerHTML = html;
});