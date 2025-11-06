export default function Page() {
  return (
    <div className="container">
      <div className="header">
        <span className="badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 3.5c1.8-2 6.5-2 6.5 2.5 0 2.2-1.9 3.3-3.9 4.2 2 .9 3.9 2 3.9 4.2 0 4.5-4.7 4.5-6.5 2.5-1.8 2-6.5 2-6.5-2.5 0-2.2 1.9-3.3 3.9-4.2-2-.9-3.9-2-3.9-4.2 0-4.5 4.7-4.5 6.5-2.5Z" fill="currentColor"/>
          </svg>
          Goodluck Footwear
        </span>
      </div>

      <h1 className="h1">Brand logo suite</h1>
      <p className="lead">Download scalable SVG assets. Designed for clarity, balance, and versatility across light and dark backgrounds.</p>

      <div className="grid">
        <section className="card half">
          <h3>Primary (full logo)</h3>
          <div className="preview">
            <img src="/logo.svg" alt="Goodluck Footwear logo" width={560} height={180} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="actions">
            <a className="button" href="/logo.svg" download>Download SVG</a>
            <a className="button secondary" href="/wordmark.svg" download>Wordmark SVG</a>
          </div>
        </section>

        <section className="card half">
          <h3>Icon</h3>
          <div className="preview dark">
            <img src="/icon.svg" alt="Goodluck Footwear icon" width={140} height={140} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="actions">
            <a className="button" href="/icon.svg" download>Download SVG</a>
          </div>
        </section>

        <section className="card" style={{ gridColumn: 'span 12' }}>
          <h3>Usage guidance</h3>
          <ul>
            <li>Use the full logo where space allows; switch to the icon under 120px width.</li>
            <li>Primary color: <code>#16A34A</code>; Accent: <code>#F59E0B</code>; Ink: <code>#0F172A</code>.</li>
            <li>Maintain clear space equal to the clover height around the mark.</li>
          </ul>
        </section>
      </div>

      <footer className="footer">? {new Date().getFullYear()} Goodluck Footwear. All rights reserved.</footer>
    </div>
  );
}
