import profileImage from "../assets/sharon-prince.jpg";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">

        {/* TEXT */}
        <div className="hero-text">
          <h1>
            Hi! I'm Sharon Prince.
            <br />
            <span>
              Social Worker & <span className="highlight">Academic</span>
            </span>
          </h1>

          <p className="hero-description">
            Executive Director at{" "}
            <span className="accent">Padma Foundation</span> and{" "}
            <span className="accent">UGC NET qualified</span> in Social Work.
            A dedicated professional committed to improving quality of life
            among individuals and communities, with a strong focus on education,
            empowerment, and social change. Passionate about nurturing the next
            generation of changemakers.
          </p>

          <a href="mailto:sharonprinceofficial@gmail.com" className="cta-btn">
            Get in touch
          </a>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={profileImage} alt="Sharon Prince" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
