const params = new URLSearchParams(window.location.search);

const niche = params.get("niche");
const theme = params.get("theme");

// Niche content apply
if (nicheData[niche]) {
  const data = nicheData[niche];

  document.getElementById("title").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;
}

// Theme apply
if (theme) {
  document.body.setAttribute("data-theme", theme);
}