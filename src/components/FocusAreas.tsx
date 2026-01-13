const FocusAreas = () => {
  return (
    <section id="work">
      <div className="container">
        <h2 className="section-title">Focus Areas</h2>

        <div className="grid-container">
          <div className="card">
            <h3>Academic Teaching</h3>
            <p>
              Delivered lectures and guided fieldwork for MSW students, focusing
              on social policy and community organization.
            </p>
            <span className="tag">Education</span>
          </div>

          <div className="card">
            <h3>Community Outreach</h3>
            <p>
              Led initiatives for rural development and organized workshops on
              mental health awareness.
            </p>
            <span className="tag">Social Work</span>
          </div>

          <div className="card">
            <h3>Research & Policy</h3>
            <p>
              Conducted extensive research on social welfare schemes and their
              impact on marginalized communities.
            </p>
            <span className="tag">Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
