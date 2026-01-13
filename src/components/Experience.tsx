import useReveal from "../hooks/useReveal";

import padmaLogo from "../assets/padma.png";
import rajagiriLogo from "../assets/rajagiri.png";
import magicBusLogo from "../assets/magicbus.png";

const Experience = () => {
  useReveal();

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>

        {/* PADMA */}
        <div className="experience-item reveal">
          <div className="exp-role">
            <div className="exp-header">
              <img src={padmaLogo} alt="Padma Foundation" />
              <div>
                <h3>Domain Expert Director (Art Outreach)</h3>
                <p>Padma Knowledgeverse · Full-time</p>
              </div>
            </div>
          </div>
          <div className="exp-desc">
            Executive Director at Padma Foundation and Domain Expert Director
            leading art outreach initiatives focused on cultural engagement and
            social impact.
          </div>
          <div className="exp-date">Sep 2025 — Present</div>
        </div>

        {/* RAJAGIRI */}
        <div className="experience-item reveal">
          <div className="exp-role">
            <div className="exp-header">
              <img src={rajagiriLogo} alt="Rajagiri College of Social Sciences" />
              <div>
                <h3>Teaching Associate – Social Work / Coordinator (RASAP)</h3>
                <p>Rajagiri College of Social Sciences</p>
              </div>
            </div>
          </div>
          <div className="exp-desc">
            Teaching Associate and academic coordinator, handling curriculum,
            mentoring students, and coordinating RASAP programs.
          </div>
          <div className="exp-date">Oct 2024 — Jun 2025</div>
        </div>

        {/* MAGIC BUS */}
        <div className="experience-item reveal">
          <div className="exp-role">
            <div className="exp-header">
              <img src={magicBusLogo} alt="Magic Bus India Foundation" />
              <div>
                <h3>Youth Mentor</h3>
                <p>Magic Bus India Foundation · Full-time</p>
              </div>
            </div>
          </div>
          <div className="exp-desc">
            Mentored youth through life-skills education, empowerment, and
            community engagement programs.
          </div>
          <div className="exp-date">Jan 2024 — May 2024</div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
