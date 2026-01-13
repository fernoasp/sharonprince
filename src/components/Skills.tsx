const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>

        <div className="skills-list">
          {[
            "Curriculum Development",
            "Case Work",
            "Social Research",
            "Community Organization",
            "Counseling",
            "Public Speaking",
            "Project Management",
          ].map((skill) => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
