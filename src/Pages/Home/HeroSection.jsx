import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import data from "../../data/index.json";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box" data-aos="fade-up">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm {data.hero.title}</p>
          <h5 className="hero--section--title"  style={{fontSize: '3rem', fontWeight:'normal'}}>
            <span className="hero--section-title--color">{data.hero.subtitle}</span>{" "}
            <br />
            {data.hero.role}
          </h5>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="Contact">
              <button className="btn btn-primary">Get In Touch</button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              Download CV
            </a>
          </div>
          <p className="hero--section-description" style={{ fontSize: "1rem" }}>
            <ReactTyped
              strings={data.hero.strings}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="+"
              showCursor={true}
            />
          </p>
        </div>
      </div>

    </section>
  );
}
