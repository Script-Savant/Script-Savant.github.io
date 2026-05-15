import { ReactTyped } from "react-typed";
import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <div>
      <section id="AboutMe" className="about--section" data-aos="fade-up" data-aos-delay="200">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="section--title">About</p>
            <h1 className="skills-section--heading" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>{data.about.title}</h1>
            <div className="about-me-description">
              <div
                className="hero--section-description"
                style={{ marginBottom: "2rem", color: "var(--darkblue)", fontSize: "1.2rem", lineHeight: "1.8" }}
              >
                <p style={{ marginBottom: "20px" }}>{data.about.description}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                  {data.about.badges.map((badge, index) => (
                    <span key={index} className="badge px-3 py-2 fs-6 rounded-pill" style={{ backgroundColor: 'var(--primary-hover)', color: 'var(--white)' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
