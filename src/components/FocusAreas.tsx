import { useState } from "react";
import mh1 from "../assets/mental-health/mh-1.jpg";
import mh2 from "../assets/mental-health/mh-2.jpg";
import mh3 from "../assets/mental-health/mh-3.jpg";


const mentalHealthImages = [mh1, mh2, mh3];

const FocusAreas = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="work">
      <div className="container">
        <h2 className="section-title">Focus Areas</h2>

        <div className="grid-container">

          {/* Academic Teaching */}
          <div className="card">
            <h3>Academic Teaching</h3>
            <p>
              Delivered lectures and guided fieldwork for MSW students, focusing
              on social policy and community organization.
            </p>
            <span className="tag tag-gold">Education</span>
          </div>

          {/* Community Outreach */}
          <div className="card">
            <h3>Community Outreach</h3>
            <p>
              Led initiatives for rural development and organized workshops on
              mental health awareness.
            </p>
            <span className="tag tag-gold">Social Work</span>
          </div>

          {/* Mental Health Workshops */}
          <div
            className="card card-slideshow"
            onMouseEnter={() => setActiveImage(0)}
          >
            <h3>Mental Health Workshops</h3>

            <p>
              Interactive mental health awareness sessions conducted for
              professionals, institutions, and public health programs.
            </p>

            <span className="tag tag-gold">Mental Health</span>

            {/* SLIDESHOW OVERLAY */}
            <div className="slideshow-overlay">
              <div className="slideshow-images">
                {mentalHealthImages.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt="Mental Health Workshop"
                    className={index === activeImage ? "active" : ""}
                  />
                ))}
              </div>

              <div className="slideshow-text">
                October 10th on World Mental Health Day, it was an honouring
                experience to be invited as a resource person by the District
                Mental Health Programme, Kochi City Police, National Health
                Mission, and District Health Office Ernakulam. The session was
                delivered to mental health professionals, DMHP staff, and nurses.
                Winding up the session with a short Zumba session turned out to
                be a spontaneous and joyful experience.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
