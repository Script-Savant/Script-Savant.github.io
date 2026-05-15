import React from "react";

export default function GithubStats() {
  return (
    <section className="github-stats-section" id="GithubStats">
      <div className="portfolio--container text-center" data-aos="fade-up">
        <p className="sub--title">Open Source</p>
        <h2 className="section--heading">GitHub Activity</h2>
        <div className="github-cards-container d-flex flex-wrap justify-content-center gap-4 mt-5">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Script-Savant&show_icons=true&theme=dracula" 
            alt="GitHub Stats" 
            className="img-fluid github-card shadow-lg" 
          />
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Script-Savant&layout=compact&theme=dracula" 
            alt="Top Languages" 
            className="img-fluid github-card shadow-lg" 
          />
        </div>
        <div className="mt-5">
          <a href="https://github.com/Script-Savant" target="_blank" rel="noreferrer" className="btn btn-github">
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
