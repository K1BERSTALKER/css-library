/**
 * NeonUI - Simple hash-based router
 * Loads page content from the pages/ folder
 */

const NeonRouter = {
  currentPage: null,
  cache: {},

  init() {
    // Render nav
    NeonComponents.renderNav("sidebar-nav", this.getPage());

    // Listen to hash changes
    window.addEventListener("hashchange", () => this.navigate());

    // Handle nav clicks
    document.getElementById("sidebar-nav").addEventListener("click", (e) => {
      const navItem = e.target.closest(".nav-item");
      if (navItem) {
        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
          document.getElementById("sidebar-toggle").checked = false;
        }
      }
    });

    // Initial load
    this.navigate();
  },

  getPage() {
    return window.location.hash.replace("#", "") || "home";
  },

  async navigate() {
    const page = this.getPage();
    if (page === this.currentPage) return;

    this.currentPage = page;

    // Update active nav
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.page === page);
    });

    // Load page content
    await this.loadPage(page);
  },

  async loadPage(page) {
    const contentArea = document.getElementById("content-area");

    // Show loading skeleton
    contentArea.innerHTML = `
            <div class="component-page" style="animation: fadeIn 0.3s ease">
                <div class="neon-skeleton neon-skeleton-title" style="width: 40%; margin-bottom: 16px;"></div>
                <div class="neon-skeleton neon-skeleton-text" style="width: 80%;"></div>
                <div class="neon-skeleton neon-skeleton-text" style="width: 60%;"></div>
                <div style="margin-top: 32px;">
                    <div class="neon-skeleton neon-skeleton-image" style="height: 150px;"></div>
                </div>
            </div>
        `;

    try {
      let html;
      if (this.cache[page]) {
        html = this.cache[page];
      } else {
        const response = await fetch(`pages/${page}.html`);
        if (!response.ok) throw new Error("Page not found");
        html = await response.text();
        this.cache[page] = html;
      }

      // Small delay for smooth feel
      await new Promise((resolve) => setTimeout(resolve, 150));

      contentArea.innerHTML = html;

      // Apply syntax highlighting
      NeonHighlight.applyAll();

      // Scroll to top
      contentArea.scrollTop = 0;
      window.scrollTo(0, 0);
    } catch (err) {
      contentArea.innerHTML = `
                <div class="component-page">
                    <div class="component-header">
                        <h1>404 - Page Not Found</h1>
                        <p>The page "${page}" doesn't exist. Check the sidebar for available pages.</p>
                    </div>
                    <a href="#home" class="neon-btn neon-btn-primary">← Back to Home</a>
                </div>
            `;
    }
  },
};

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  NeonRouter.init();
});
