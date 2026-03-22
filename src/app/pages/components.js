export function renderComponents(container) {
  container.innerHTML = `
    <div class="page">
      <nav class="nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#components" class="nav-link">Components</a>
      </nav>

      <h1>Components</h1>

      <section class="section">
        <h2>Button</h2>

        <h3>Variants</h3>
        <div class="demo">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-ghost">Ghost</button>
        </div>

        <h3>Sizes</h3>
        <div class="demo">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Medium</button>
          <button class="btn btn-primary btn-lg">Large</button>
        </div>

        <h3>States</h3>
        <div class="demo">
          <button class="btn btn-primary">Normal</button>
          <button class="btn btn-primary" data-loading="true">Loading</button>
          <button class="btn btn-primary" disabled>Disabled</button>
        </div>

        <details class="code-details">
          <summary>View Code</summary>
          <pre class="code"><code>&lt;button class="btn btn-primary"&gt;Click me&lt;/button&gt;</code></pre>
        </details>
      </section>
    </div>
  `;
}
