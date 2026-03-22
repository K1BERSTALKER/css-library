/**
 * NeonUI - Reusable Components Renderer
 * Only renders repeated elements (nav, code blocks, footer)
 */

const NeonComponents = {
  // Navigation items data
  navData: [
    {
      section: "Getting Started",
      items: [
        { icon: "🏠", label: "Home", page: "home" },
        { icon: "🚀", label: "Quick Start", page: "getting-started" },
      ],
    },
    {
      section: "Components",
      items: [
        { icon: "🔘", label: "Buttons", page: "buttons" },
        { icon: "🃏", label: "Cards", page: "cards" },
        { icon: "📦", label: "Modal", page: "modal" },
        { icon: "📑", label: "Tabs", page: "tabs" },
        { icon: "🧭", label: "Navigation", page: "navigation" },
        { icon: "🪗", label: "Accordion", page: "accordion" },
        { icon: "💬", label: "Tooltip", page: "tooltip" },
        { icon: "🔀", label: "Toggle", page: "toggle" },
        { icon: "📝", label: "Forms", page: "forms" },
        { icon: "🏷️", label: "Badges", page: "badges" },
        { icon: "⚠️", label: "Alerts", page: "alerts" },
        { icon: "📊", label: "Progress", page: "progress" },
        { icon: "📋", label: "Dropdown", page: "dropdown" },
        { icon: "🧭", label: "Breadcrumb", page: "breadcrumb" },
        { icon: "👤", label: "Avatar", page: "avatar" },
        { icon: "💀", label: "Skeleton", page: "skeleton" },
        { icon: "📊", label: "Table", page: "table" },
        { icon: "📅", label: "Timeline", page: "timeline" },
        { icon: "🎚️", label: "Slider", page: "slider" },
      ],
    },
  ],

  /**
   * Render sidebar navigation
   */
  renderNav(containerId, activePage) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = "";
    this.navData.forEach((section) => {
      html += `<div class="nav-section-title">${section.section}</div>`;
      section.items.forEach((item) => {
        const isActive = activePage === item.page ? "active" : "";
        html += `
                    <a href="#${item.page}" class="nav-item ${isActive}" data-page="${item.page}">
                        <span class="nav-icon">${item.icon}</span>
                        <span>${item.label}</span>
                    </a>
                `;
      });
    });

    container.innerHTML = html;
  },

  /**
   * Create a code block with copy button
   */
  codeBlock(language, code) {
    const id = "code-" + Math.random().toString(36).substr(2, 9);
    return `
            <div class="code-block">
                <div class="code-block-header">
                    <span>${language}</span>
                    <button class="copy-btn" onclick="NeonComponents.copyCode('${id}')">Copy</button>
                </div>
                <pre id="${id}"><code>${this.escapeHtml(code.trim())}</code></pre>
            </div>
        `;
  },

  /**
   * Escape HTML special characters
   */
  escapeHtml(str) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
  },

  /**
   * Copy code to clipboard
   */
  copyCode(id) {
    const codeEl = document.getElementById(id);
    if (!codeEl) return;

    const text = codeEl.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const btn = codeEl.previousElementSibling
        ? codeEl.parentElement.querySelector(".copy-btn")
        : null;

      // Find the button that's a sibling in the code-block-header
      const codeBlock = codeEl.closest(".code-block");
      const copyBtn = codeBlock ? codeBlock.querySelector(".copy-btn") : null;

      if (copyBtn) {
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copy";
          copyBtn.classList.remove("copied");
        }, 2000);
      }
    });
  },

  /**
   * Create a preview + code section
   */
  previewSection(title, previewHtml, codeStr, language = "HTML") {
    return `
            <div class="component-section">
                ${title ? `<h3>${title}</h3>` : ""}
                <div class="preview-box">
                    ${previewHtml}
                </div>
                ${codeStr ? this.codeBlock(language, codeStr) : ""}
            </div>
        `;
  },
};

// Theme toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("neonui-theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "light") {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    const theme = themeToggle.checked ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("neonui-theme", theme);
  });
});
