export function renderHome(container) {
  container.innerHTML = `
    <div class="page">
      <nav class="nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#components" class="nav-link">Components</a>
      </nav>

      <header class="hero">
        <h1 class="hero__title">UI Library</h1>
        <p class="hero__subtitle">Modern, framework-agnostic CSS components</p>
        <div class="hero__actions">
          <a href="#components" class="btn btn-primary btn-lg">View Components</a>
          <button class="btn btn-secondary btn-lg" onclick="alert('npm install @yourname/ui-lib')">
            Install
          </button>
        </div>
      </header>

      <section class="section">
        <h2>Features</h2>
        <div class="features">
          <div class="feature-card">
            <h3>🎨 Framework Agnostic</h3>
            <p>Works with React, Vue, Svelte, or vanilla HTML</p>
          </div>
          <div class="feature-card">
            <h3>⚡ Zero Dependencies</h3>
            <p>Pure CSS. No JavaScript required.</p>
          </div>
          <div class="feature-card">
            <h3>🌈 Themeable</h3>
            <p>Custom colors and dark mode built-in</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Quick Example</h2>
        <div class="demo">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-ghost">Ghost</button>
        </div>
        <pre class="code"><code>npm install @yourname/ui-lib</code></pre>
      </section>
    </div>
  `;
}
