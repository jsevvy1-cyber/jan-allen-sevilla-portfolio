export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="project-grid">

        {/* 1. Springfield School Web Platform */}
        <div className="project-card">
          <div className="project-header">
            <h3>Springfield School Web Platform & 360° Virtual Tour Engine</h3>
            <span className="project-year">2026</span>
          </div>
          <p>
            Developed a high-performance React.js web platform integrated with an interactive 360° virtual walkthrough engine and custom support chatbot.
          </p>
          <div className="tech-tags">
            <span className="tag">React.js</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Marzipano Engine</span>
          </div>
        </div>

        {/* 2. CEIS Academic Web Platform (Kept View Code link) */}
        <div className="project-card">
          <div className="project-header">
            <h3>CEIS Academic Web Platform & Interactive Panoramic Engine</h3>
            <span className="project-year">2025</span>
          </div>
          <p>
            Built a dynamic React.js platform translating institutional requirements into a modular web application with embedded panoramic navigation.
          </p>
          <div className="tech-tags">
            <span className="tag">React.js</span>
            <span className="tag">JavaScript</span>
            <span className="tag">HTML5/CSS3</span>
            <span className="tag">Marzipano</span>
            <span className="tag">UI/UX Design</span>
          </div>
          <a href="#" className="project-link">View Code →</a>
        </div>

        {/* 3. Law Office Management */}
        <div className="project-card">
          <div className="project-header">
            <h3>Law Office Management Mobile Application & Web Portal</h3>
            <span className="project-year">2024</span>
          </div>
          <p>
            Executed end-to-end multi-platform architecture for firm schedules, client metrics, and case timelines with backend validation logic and SQL database schemas.
          </p>
          <div className="tech-tags">
            <span className="tag">C#</span>
            <span className="tag">Java</span>
            <span className="tag">Kotlin</span>
            <span className="tag">SQL</span>
            <span className="tag">Android Studio</span>
          </div>
        </div>

        {/* 4. Library Management System */}
        <div className="project-card">
          <div className="project-header">
            <h3>Library Management System & Hotel Reservation Web Application</h3>
            <span className="project-year">2023</span>
          </div>
          <p>
            Delivered full-stack development, engineering both front-end web interfaces and normalized MySQL relational database schemas to optimize query execution.
          </p>
          <div className="tech-tags">
            <span className="tag">Java</span>
            <span className="tag">PHP</span>
            <span className="tag">MySQL</span>
            <span className="tag">JavaScript</span>
            <span className="tag">CSS3</span>
          </div>
        </div>

      </div>
    </section>
  );
}