import profileImage from "../assets/sharon-prince.jpg";

const Header = () => {
  return (
    <header>
      <div className="container nav-flex">

        {/* LOGO + IMAGE */}
        <a href="#about" className="logo-wrap">
          <div className="logo-img">
            <img src={profileImage} alt="Sharon Prince" />
          </div>
          <span className="logo-text">Sharon Prince.</span>
        </a>

        {/* NAVIGATION */}
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Focus Areas</a>
          <a href="#milestones">Milestones</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
