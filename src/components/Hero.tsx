import profileImage from "../assets/sharon-prince.jpg";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: "60px" }}>

        {/* TEXT */}
        <div style={{ flex: 1 }}>
          <h1>
            Hi! I'm Sharon Prince.<br />
            <span>
              Social Worker & <span className="highlight">Academic</span>
            </span>
          </h1>

          <p>
            MSW Graduate & Former Assistant Professor at Rajagiri School of Social
            Science. Dedicated to community development, social research, and
            empowering the next generation of changemakers.
          </p>

          <a href="mailto:sharonprinceofficial@gmail.com" className="cta-btn">
            Get in touch
          </a>
        </div>

        {/* PROFILE IMAGE */}
        <div
          style={{
            width: "380px",
            height: "400px",
            borderRadius: "20%",
            overflow: "hidden",
            border: "2px solid var(--accent-color)",
            flexShrink: 0,
            animation: "fadeIn 1.5s ease forwards",
          }}
        >
          <img
            src={profileImage}
            alt="Sharon Prince"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
