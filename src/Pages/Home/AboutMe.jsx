import { ReactTyped } from "react-typed";

export default function AboutMe() {
  return (
    <div>
      <section id="AboutMe" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="section--title">About</p>
            <h1 className="skills-section--heading" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>About Me</h1>
            <div className="about-me-description">
              <div
                className="hero--section-description"
                style={{ marginBottom: "2rem", color: "var(--darkblue)", fontSize: "1.2rem", lineHeight: "1.8" }}
              >
                <p style={{ marginBottom: "20px" }}>
                  I am a results-driven Full-Stack Software Engineer with over 6 years of experience building scalable applications and cloud solutions. AWS Certified with a passion for driving impactful solutions.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                   <span className="badge bg-primary px-3 py-2 fs-6 rounded-pill">6+ Years Experience</span>
                   <span className="badge bg-success px-3 py-2 fs-6 rounded-pill">AWS Certified Solution Architect</span>
                   <span className="badge bg-info px-3 py-2 fs-6 rounded-pill text-dark">B.Sc. Applied Computer Science</span>
                   <span className="badge bg-warning px-3 py-2 fs-6 rounded-pill text-dark">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
