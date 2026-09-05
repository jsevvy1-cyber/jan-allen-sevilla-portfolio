export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="experience-list">
        
        {/* Degree */}
        <div className="experience-card">
          <div className="project-header">
            <h3>Bachelor of Science in Information Technology</h3>
            <span className="project-year">Graduated 2026</span>
          </div>
          <p className="company">Trinity University of Asia — Quezon City</p>
          <p className="exp-meta">Specialization in Software Engineering</p>
          <ul>
            <li>Completed capstone project developing a 360-degree virtual tour platform with integrated web features.</li>
            <li>Focused coursework on full-stack web development, database management systems, and software engineering principles.</li>
          </ul>
        </div>

        {/* Training / Certifications */}
        <div className="experience-card">
          <div className="project-header">
            <h3>Level 1 Cybersecurity Training</h3>
            <span className="project-year">Feb 2025</span>
          </div>
          <p className="company">Trinity University of Asia</p>
          <p className="exp-meta">Certification</p>
          <ul>
            <li>Trained in fundamental cybersecurity principles, network security concepts, and threat mitigation strategies.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}