// ===== Initialization =====

document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized");

  setupThemeToggle();
});

// ===== Theme Toggle Example =====

function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");

  if (!btn) return;

  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}
