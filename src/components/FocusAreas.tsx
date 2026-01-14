import { useEffect, useState } from "react";

// Mental Health images
import mh1 from "../assets/mental-health/mh-1.jpg";
import mh2 from "../assets/mental-health/mh-2.jpg";
import mh3 from "../assets/mental-health/mh-3.jpg";

// Videos
import magicBusVideo from "../assets/videos/magicbus-edakochi.mp4";
import rajagiriVideo from "../assets/videos/rajagiri-womens-day.MP4";

const mentalHealthImages = [mh1, mh2, mh3];

const FocusAreas = () => {
  const [openMentalHealth, setOpenMentalHealth] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const [openAcademic, setOpenAcademic] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Auto slideshow for mental health images
  useEffect(() => {
    if (!openMentalHealth) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % mentalHealthImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [openMentalHealth]);

  return (
    <>
      <section id="work">
        <div className="container">
          <h2 className="section-title">Focus Areas</h2>

          <div className="grid-container">
            {/* Academic Teaching */}
            <div
              className="card clickable"
              onClick={() => setOpenAcademic(true)}
            >
              <h3>Academic Teaching</h3>
              <p>
                Academic sessions, student engagement, and wellbeing-focused
                initiatives within higher education institutions.
              </p>
              <span className="tag tag-gold">Education</span>
            </div>

            {/* Community Outreach */}
            <div
              className="card clickable"
              onClick={() => setOpenCommunity(true)}
            >
              <h3>Community Outreach</h3>
              <p>
                Collaborative outreach initiatives focused on mental wellbeing,
                creativity, and student engagement.
              </p>
              <span className="tag tag-gold">Social Work</span>
            </div>

            {/* Mental Health Workshops */}
            <div
              className="card clickable"
              onClick={() => setOpenMentalHealth(true)}
            >
              <h3>Mental Health Workshops</h3>
              <p>
                Awareness sessions delivered for professionals, institutions,
                and public health programmes.
              </p>
              <span className="tag tag-gold">Mental Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC TEACHING MODAL ================= */}
      {openAcademic && (
        <div
          className="popup-backdrop"
          onClick={() => setOpenAcademic(false)}
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setOpenAcademic(false)}
            >
              ×
            </button>

            <div className="popup-image">
              <video
                key={openAcademic ? "open" : "closed"}
                src={rajagiriVideo}
                autoPlay
                muted
                controls
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="popup-content">
              <h3>Rajagiri College of Social Sciences — Academic Session</h3>
              <p>
                Rajagiri College of Social Sciences (Autonomous), Kalamassery,
                observed <strong>International Women’s Day</strong> with a
                session on <strong>Self-care and Zumba Training</strong>.
                <br /><br />
                It was a joyful and empowering experience to be part of the
                celebration with the incredible women of Rajagiri, promoting
                wellbeing, movement, and self-care within an academic space.
                <br /><br />
                <em>
                  #International_Womens_Day &nbsp; #RCSS
                </em>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= COMMUNITY OUTREACH MODAL ================= */}
      {openCommunity && (
        <div
          className="popup-backdrop"
          onClick={() => setOpenCommunity(false)}
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setOpenCommunity(false)}
            >
              ×
            </button>

            <div className="popup-image">
              <video
                key={openCommunity ? "open" : "closed"}
                src={magicBusVideo}
                autoPlay
                muted
                controls
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="popup-content">
              <h3>Magic Bus India Foundation — Community Outreach</h3>
              <p>
                Second collaboration with{" "}
                <strong>Magic Bus India Foundation</strong> at Government High
                School, Edakochi.
                <br /><br />
                Neurographic Art proved to be highly effective with the students
                of GHS. As the resource person, the session enabled meaningful
                engagement, new perspectives, and deeper exploration of
                creativity as a reflective and therapeutic tool within the
                school community.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= MENTAL HEALTH MODAL ================= */}
      {openMentalHealth && (
        <div
          className="popup-backdrop"
          onClick={() => setOpenMentalHealth(false)}
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setOpenMentalHealth(false)}
            >
              ×
            </button>

            <div className="popup-image">
              <img
                src={mentalHealthImages[activeImage]}
                alt="Mental Health Workshop"
              />
            </div>

            <div className="popup-content">
              <h3>Mental Health Workshops</h3>
              <p>
                October 10th on World Mental Health Day, it was an honouring
                experience to be invited as a resource person by the District
                Mental Health Programme, Kochi City Police, National Health
                Mission, and District Health Office Ernakulam.
                <br /><br />
                The session was delivered to mental health professionals, DMHP
                staff, and nurses. Winding up the session with a short Zumba
                session turned out to be a spontaneous and joyful experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FocusAreas;
