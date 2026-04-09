const navItems = ['Home', 'Features', 'Contact'];

export default function App() {
  return (
    <>
      <header className="navbar" id="home">
        <div className="container nav-content">
          <a className="brand" href="#home">
            Codex Landing
          </a>
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Launch fast. Scale confidently.</p>
            <h1>Build your next idea with a polished landing page.</h1>
            <p>
              This React starter includes a responsive navbar, a conversion-focused hero section, and a
              styled contact form so you can ship quickly.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Contact Us
              </a>
              <a className="btn btn-secondary" href="#features">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container feature-grid">
            <article>
              <h2>Responsive</h2>
              <p>Looks great on desktop, tablet, and mobile without extra setup.</p>
            </article>
            <article>
              <h2>Modern React</h2>
              <p>Built using React + Vite for a smooth and fast development experience.</p>
            </article>
            <article>
              <h2>Deploy-ready</h2>
              <p>Configured for quick GitHub Pages deployment with a single command.</p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-card">
            <h2>Get in touch</h2>
            <p>Tell us about your project and we’ll get back to you soon.</p>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Jane Doe" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="How can we help?" required />

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
