import { ReactTyped } from "react-typed";

export default function AboutMe() {
  return (
    <div >
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          {/* <img
            src="./img/about-me.jpg"
            alt="About Me"
            style={{
              height: "25rem",
              width: "50rem",
              borderRadius: "10px",
              boxShadow: "5px 5px 10px",
            }}
          /> */}
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading" style={{ fontSize: '2rem', fontWeight: 'normal' }}>About Me</h1>
            <div className="about-me-description">
              <div
                className="hero--section-description"
                style={{ marginBottom: "2rem", color: "#373d3f", fontSize: "1.2rem" }}
              >
               <ul className="list-group text-start border-0">
                  <li className="list-group-item">
                    5+ years in software development.
                  </li>
                  <li className="list-group-item">
                    B.Sc.(Applied Computer Science)
                    </li>
                    <li className="list-group-item">
                    Post Graduate Diploma (Software Engineering)
                  </li>
                  <li className="list-group-item">
                    AWS Certified
                  </li>
                  <li className="list-group-item">
                    Contributed to diverse open source projects.
                  </li>
                  <li className="list-group-item">
                    Fitness enthusiast, book lover, tech advocate and educator.
                  </li>
                  <li className="list-group-item">
                   Champions innovative solutions.
                  </li>
               </ul> 
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
