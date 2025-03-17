import React from "react";

const Resume = () => {
    return (
        <div className="container mx-auto my-5 py-4 border border-danger">
            <section id="resume" className="resume">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="section-title text-center mb-5">
                        <h2>Resume</h2>
                        <p className="fs-5 text-dark fst-italic">
                            Experienced software engineer adept in full-stack development,
                            passionate about crafting robust, high-quality solutions from
                            concept to completion with efficiency and excellence.
                        </p>
                    </div>
                    <hr />

                    <div className="row my-2">
                        <div className="col-lg-6 text-start border-end shadow pt-1 my-2">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0 mb-4">
                                <h4 className="text-success">Alex Njuguna Kinuthia</h4>
                                <p>
                                    <em>
                                        Innovative and deadline-driven Software Engineer with 5+ years
                                        of experience designing and developing user-centered
                                        applications from initial concept to final, polished
                                        deliverable.
                                    </em>
                                </p>
                                <ul>
                                    <li>60871-00100, Nairobi, Kenya</li>
                                    <li>(254) 117379486</li>
                                    <li>njugunakinuthia013@gmail.com</li>
                                </ul>
                            </div>
                            <hr />

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item mb-4">
                                <h4 className="text-success">Cloud Computing</h4>
                                <h5>2024</h5>
                                <p>
                                    <em>AWS Restart</em>
                                </p>
                                <p>
                                    Developed a solid foundation in AWS Cloud, encompassing core
                                    cloud computing concepts, key AWS services, security best
                                    practices, and compliance. I honed my skills in building and
                                    deploying applications on AWS, managing and operating AWS
                                    infrastructure, and leveraging AWS tools for data storage,
                                    networking, and database management.
                                </p>
                            </div>
                            <div className="resume-item mb-4">
                                <h4 className="text-success">Post Graduate Diploma in Software Engineering</h4>
                                <h5>2022 - 2024</h5>
                                <p>
                                    <em>ALX Software Engineering School</em>
                                </p>
                                <p>
                                    Completed a rigorous Post Graduate Diploma in Software
                                    Engineering, focusing on advanced methodologies, algorithms,
                                    and architecture. Proficient in C, Python, and JavaScript, with
                                    hands-on experience in Django and React, emphasizing Agile
                                    methodologies, software testing, debugging, and maintenance.
                                </p>
                            </div>
                            <div className="resume-item mb-4">
                                <h4 className="text-success">Bachelor of Science in Applied Computer Science</h4>
                                <h5>2015 - 2019</h5>
                                <p>
                                    <em>
                                        Kisii University - School of Information Science & Technology,
                                        Kisii, Kenya
                                    </em>
                                </p>
                                <p>
                                    Studied computer programming, algorithms and data structures.
                                    Specialized in software development, database management, and
                                    system analysis, applying theoretical concepts in practical
                                    projects.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 shadow pt-1 my-2">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item mb-4">
                                <h4 className="text-success">Software Engineer/FullStack Software Developer</h4>
                                <h5>2021 - Present</h5>
                                <p>
                                    <em>Independent Contractor</em>
                                </p>
                                <ul>
                                    <li>
                                        Successfully delivered custom web and desktop applications,
                                        showcasing proficiency in frontend and backend development.
                                    </li>
                                    <li>
                                        Managed client relationships, ensuring satisfaction through
                                        effective communication and project management.
                                    </li>
                                    <li>
                                        Implemented scalable solutions, leveraging technologies like
                                        Django, React, MongoDB, PostgreSQL, MySQL, and BeeWare to
                                        meet diverse client requirements.
                                    </li>
                                    <li>Oversee the efficient use of production project budgets.</li>
                                </ul>
                            </div>
                            <div className="resume-item mb-4">
                                <h4 className="text-success">Internship → Software Engineer</h4>
                                <h5>2018 - 2020</h5>
                                <p>
                                    <em>Datacare Ltd, Westlands, Kenya</em>
                                </p>
                                <ul>
                                    <li>
                                        Developed and tested software applications, gaining
                                        proficiency in languages like Python, JavaScript, and C.
                                    </li>
                                    <li>
                                        Collaborated on projects following Agile methodologies,
                                        enhancing skills in problem-solving and teamwork.
                                    </li>
                                    <li>
                                        Contributed to the design and implementation of scalable
                                        solutions, demonstrating initiative and adaptability in a
                                        professional environment.
                                    </li>
                                    <li>
                                        Recommended and consulted with clients on the most appropriate
                                        technical solution.
                                    </li>
                                </ul>
                            </div>
                            <hr />

                            <h3 className="resume-title">Certifications</h3>
                            <div className="resume-item pb-0">
                                <h4 className="text-success">Professional & Academic Certifications</h4>
                                <p className="fst-italic">Accreditations</p>
                                <ul>
                                    <li>AWS Certified Cloud Practitioner - AWS</li>
                                    <li>AWS Restart Certification - AWS Restart Kenya</li>
                                    <li>
                                        Software Engineering Post Graduate Certification - ALX
                                    </li>
                                    <li>
                                        Bachelor's of Science in Applied Computer Science
                                        Undergraduate Certification - Kisii University
                                    </li>
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