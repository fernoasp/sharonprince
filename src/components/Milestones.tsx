import { useEffect, useState } from "react";

import m2 from "../assets/milestones/sharon-paper.jpg";
import m3 from "../assets/milestones/sharon-resource.jpg";
import m4 from "../assets/milestones/sharon-art-therapy.jpg";
import m1 from "../assets/milestones/sharon.jpg";

const milestones = [
    {
    image: m1,
    text:
      "World Mental Health Day session with DMHP, Kochi City Police & NHM — concluded with a spontaneous Zumba session.",
  },
  {
    image: m2,
    text:
      "Presented a paper on 'Combating Social Isolation and Loneliness among the Elderly' at BCM College, Mary Richmond Series National Conference (May 2024).",
  },
  {
    image: m3,
    text:
      "Invited as Resource Person for 'Perspective Development and Exam Preparation' workshop at St. Xavier's College, Calicut.",
  },
  {
    image: m4,
    text:
      "Presented paper at International Conference of Indian Knowledge Systems, RCSS on Art Therapy and stakeholder perspectives.",
  },
];

const Milestones = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % milestones.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="milestones">
      <div className="container">
        <h2 className="section-title">Milestones</h2>

        <div className="milestone-card">
          <img src={milestones[index].image} alt="Milestone" />
          <div className="milestone-overlay">
            <div className="milestone-text">
                {milestones[index].text}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
