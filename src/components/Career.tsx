import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Major</h4>
                <h5>Full-Stack Focus</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Motivated computer science student focused on full-stack
              development, software architecture, and practical product delivery.
              Actively seeking internship opportunities to contribute and grow as
              an engineer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ComplyAI</h4>
                <h5>AI + Full-Stack Project</h5>
              </div>
              <h3>PROJECT</h3>
            </div>
            <p>
              Built an end-to-end compliance platform for contract and policy
              analysis with risk scoring, citation-backed findings, and suggested
              clause rewrites. Implemented upload-to-report workflows and auth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scrabble Game</h4>
                <h5>Java Project</h5>
              </div>
              <h3>PROJECT</h3>
            </div>
            <p>
              Developed board and scoring logic for a Scrabble implementation with
              strong focus on software structure, gameplay behavior, and debugging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Portfolio Website</h4>
                <h5>Frontend Project</h5>
              </div>
              <h3>PROJECT</h3>
            </div>
            <p>
              Designed and built a responsive personal portfolio to showcase
              projects, skills, and contact details with structured project-first
              presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
