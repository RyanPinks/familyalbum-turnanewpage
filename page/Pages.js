function registerEclipse(elId, data) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.dataset.eclipse = data.eclipse;
  el.dataset.symbolPlant = data.symbolPlant;
  el.dataset.chant = data.chant;
  // You can add dynamic behaviors (hover chants, timed breath prompts) here.
}

// Example usage:
registerEclipse("tommy-flame-eclipse", {
  eclipse: "Flame Eclipse",
  symbolPlant: "Tiger Lily",
  chant: "Flame paws, harvest lines, resilience shines."
});

// Load pages.json and render each page
async function loadPages() {
  const response = await fetch("pages.json");
  const pages = await response.json();

  const container = document.getElementById("pages-container");

  pages.forEach(page => {
    const card = document.createElement("section");
    card.className = "eclipse-card";

    card.innerHTML = `
      <h2>${page.title}</h2>
      <p class="authors">By ${page.authors.join(" & ")}</p>
      <p><strong>Symbol Plant:</strong> ${page.symbolPlant}</p>
      <blockquote>${page.chant}</blockquote>
      <h3>Rituals</h3>
      <ul>${page.rituals.map(r => `<li>${r}</li>`).join("")}</ul>
      <h3>Relations</h3>
      <ul>${page.relations.map(rel => `<li>${rel}</li>`).join("")}</ul>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadPages);
