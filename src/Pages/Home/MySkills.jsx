import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div style={{paddingLeft: '100px', paddingRight:'80px'}} className="portfolio--container text-center" data-aos="fade-up" data-aos-delay="100">
        <p className="sub--title">My Expertise</p>
        <h2 className="section--heading" style={{fontSize: '2.5rem', fontWeight:'700'}}>Technical Skills</h2>
      </div>
      <div className="container">
        <div className="row">
        {data?.skills?.map((item, index) => (
          <div className="col-md-3">
          <div key={index} className="skills--section--card card m-2">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
          </div>
       
        ))}
        </div>
       
      </div>
      <div className="container mt-5">
        <h3 className="text-center mb-4" style={{ color: "var(--primary)" }}>Tech Stack & Tools</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {data?.tech_stack?.map((tech, index) => (
            <span key={index} className="tech-badge shadow-sm" data-aos="zoom-in" data-aos-delay={index * 50}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
