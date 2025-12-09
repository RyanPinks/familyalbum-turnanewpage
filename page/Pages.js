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
