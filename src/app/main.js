import "../lib/index.css";
import "./styles/index.css";
import { renderHome } from "./pages/home.js";
import { renderComponents } from "./pages/components.js";

// Router
const routes = {
  "": renderHome,
  home: renderHome,
  components: renderComponents,
};

function navigate() {
  const hash = window.location.hash.slice(1) || "home";
  const render = routes[hash] || renderHome;
  const app = document.getElementById("app");
  render(app);
  updateNav(hash);
}

function updateNav(hash) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${hash}`);
  });
}

window.addEventListener("hashchange", navigate);
navigate();
