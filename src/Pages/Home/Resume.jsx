import React from "react";

const Resume = () => {
    return (
        <div className="container mx-auto my-5 py-5" style={{ maxWidth: "1200px" }}>
            <section id="resume" className="resume">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="section-title text-center mb-5">
                        <p className="sub--title">My Professional Journey</p>
                        <h2 className="section--heading" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Resume</h2>
                        <p className="fs-5 text-dark fst-italic mt-3" style={{ color: "var(--darkblue)" }}>
                            Results-driven Software Engineer with 6+ years of experience building scalable full-stack applications and cloud solutions.
                        </p>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-6 px-4">
                            <h3 className="resume-title mb-4" style={{ color: "var(--primary)", borderBottom: "2px solid var(--primary)", paddingBottom: "10px" }}>Summary & Achievements</h3>
                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded" style={{ borderLeft: "4px solid var(--primary)" }}>
                                <h4 className="text-dark fw-bold mb-3">Alex Njuguna Kinuthia</h4>
                                <p className="mb-3">
                                    <em>
                                        Proven track record of deploying production systems serving thousands of users, implementing machine learning models that improved decision-making accuracy by 25%, and architecting AWS infrastructures that reduced operational costs by 30%.
                                    </em>
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><strong>Location:</strong> Nairobi, Kenya</li>
                                    <li className="mb-2"><strong>Phone:</strong> +254 (0)117379486</li>
                                    <li className="mb-2"><strong>Email:</strong> njugunakinuthia013@gmail.com</li>
                                </ul>
                            </div>

                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded" style={{ borderLeft: "4px solid #00c853" }}>
                                <h4 className="text-dark fw-bold mb-3">Key Achievements</h4>
                                <ul style={{ lineHeight: "1.8", color: "var(--darkblue)" }}>
                                    <li><strong>Reduced Cloud Costs:</strong> Restructured AWS resource allocation reducing monthly spend without compromising reliability.</li>
                                    <li><strong>ML Model for Revenue:</strong> Built predictive pricing model improving forecast accuracy by 25% for a retail client.</li>
                                    <li><strong>E-Commerce API:</strong> Developed Golang/Gin RESTful API processing 50,000+ daily transactions with 99.8% success.</li>
                                    <li><strong>Faster Release Cycles:</strong> Led adoption of microservices architecture reducing deployment friction by 50%.</li>
                                    <li><strong>Consistent Project Delivery:</strong> Delivered multiple freelance projects on time, maintaining strong client relationships and repeat business.</li>
                                    <li><strong>Workflow Automation for SMEs:</strong> Built desktop tools replacing repetitive manual data entry, saving several hours of work per week.</li>
                                </ul>
                            </div>

                            <h3 className="resume-title mb-4 mt-5" style={{ color: "var(--primary)", borderBottom: "2px solid var(--primary)", paddingBottom: "10px" }}>Education</h3>
                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded">
                                <h4 className="fw-bold">Master of Science in Financial Engineering</h4>
                                <h5>In Progress (Expected 2028)</h5>
                                <p><em>WorldQuant University</em></p>
                            </div>
                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded">
                                <h4 className="fw-bold">Bachelor of Science in Applied Computer Science</h4>
                                <h5>2015 - 2019</h5>
                                <p><em>Kisii University</em></p>
                                <p>Thesis: "Leveraging Machine Learning for Symptom-Based Diagnosis"</p>
                            </div>
                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded">
                                <h4 className="fw-bold">Certificate in Software Engineering</h4>
                                <h5>2024</h5>
                                <p><em>ALX Software Engineering School</em></p>
                            </div>
                        </div>

                        <div className="col-lg-6 px-4">
                            <h3 className="resume-title mb-4" style={{ color: "var(--primary)", borderBottom: "2px solid var(--primary)", paddingBottom: "10px" }}>Professional Experience</h3>

                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded" style={{ borderLeft: "4px solid var(--primary)" }}>
                                <h4 className="fw-bold">Co-Founder & Chief Technology Officer</h4>
                                <h5 className="text-muted mb-2">Feb 2025 – Present</h5>
                                <p><em>RankSavanna | www.ranksavanna.co.ke</em></p>
                                <ul style={{ lineHeight: "1.8" }}>
                                    <li>Co-founded an enterprise SaaS platform unifying SEO Intelligence, POS Suite, and ERP under one subscription.</li>
                                    <li>Architected full-stack platform using Go, JavaScript, and Lightpanda, supporting 150+ SEO signals and M-Pesa integrations.</li>
                                    <li>Designed multi-tenant ERP suite with RBAC for growing East African businesses.</li>
                                    <li>Scaled platform to 100+ active users, driving product roadmap and engineering culture.</li>
                                </ul>
                            </div>

                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded" style={{ borderLeft: "4px solid var(--primary)" }}>
                                <h4 className="fw-bold">Independent Software Engineering Contractor</h4>
                                <h5 className="text-muted mb-2">Dec 2021 – Jan 2025</h5>
                                <ul style={{ lineHeight: "1.8" }}>
                                    <li>Architected 15+ AWS cloud solutions (EC2, S3, Lambda, RDS) achieving 99.9% up-time.</li>
                                    <li>Engineered full-stack applications with Python, Go, and Spring Boot serving 10,000+ users.</li>
                                    <li>Led Agile teams delivering 12 projects on-time and within budget (95% client satisfaction).</li>
                                    <li>Built desktop applications using WinForms and C#, reducing manual processing by 40%.</li>
                                </ul>
                            </div>

                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded" style={{ borderLeft: "4px solid var(--primary)" }}>
                                <h4 className="fw-bold">Software Engineer</h4>
                                <h5 className="text-muted mb-2">July 2018 – Dec 2021</h5>
                                <p><em>Datacare Ltd</em></p>
                                <ul style={{ lineHeight: "1.8" }}>
                                    <li>Developed enterprise web applications supporting 5,000+ concurrent users.</li>
                                    <li>Implemented responsive UI/UX designs achieving 40% improvement in load times.</li>
                                    <li>Integrated Spring Boot microservices and applied ML algorithms reducing processing time by 35%.</li>
                                </ul>
                            </div>

                            <h3 className="resume-title mb-4 mt-5" style={{ color: "var(--primary)", borderBottom: "2px solid var(--primary)", paddingBottom: "10px" }}>Certifications</h3>
                            <div className="resume-item shadow-sm p-4 mb-4 bg-white rounded">
                                <ul style={{ lineHeight: "2" }}>
                                    <li><strong>AWS Certified Solutions Architect</strong></li>
                                    <li><strong>AWS Certified Cloud Practitioner</strong></li>
                                    <li><strong>Graduate Certificate in Applied Computer Science</strong></li>
                                    <li><strong>AWS Re/Start Graduate</strong> - Emobilis Technology Academy</li>
                                    <li><strong>ALX Full-Stack Software Engineer</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;