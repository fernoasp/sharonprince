const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <h2>Let's make an impact together.</h2>

        <p className="footer-subtext">
          Open for research collaborations and guest lectures.
        </p>

        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sharonprince620"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.67V24h-5v-7.6c0-1.8-.03-4.1-2.5-4.1s-2.88 1.95-2.88 3.96V24h-5V8z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sharonprince620?igsh=MTdrbTlhM3U4aXd0cg=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.43.6.24 1.1.56 1.6 1.05.5.5.8 1 .99 1.6.17.5.37 1.2.43 2.4.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 1.9-.43 2.4-.24.6-.56 1.1-1.05 1.6-.5.5-1 .8-1.6.99-.5.17-1.2.37-2.4.43-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.26-2.4-.43-.6-.24-1.1-.56-1.6-1.05-.5-.5-.8-1-.99-1.6-.17-.5-.37-1.2-.43-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-1.9.43-2.4.24-.6.56-1.1 1.05-1.6.5-.5 1-.8 1.6-.99.5-.17 1.2-.37 2.4-.43C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.9a1.45 1.45 0 11-2.9 0 1.45 1.45 0 012.9 0z" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:sharonprinceofficial@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24">
              <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
            </svg>
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Sharon Prince. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
