export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Image Only */}
        <div className="hero-profile">
          <img 
            src="PIC KO.jpg" 
            alt="Jan Allen D. Sevilla" 
            className="profile-img" 
          />
        </div>

        {/* Right Column: Bio & Social Links */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse"></span> Available for Software Engineering Roles
          </div>

          <h1>Jan Allen D. Sevilla</h1>
          <p className="subtitle">Software Engineer & IT Support Specialist</p>

          <p className="bio">
            Specializing in full-stack web application development, interactive web technologies, 
            and IT infrastructure support. Experienced in architecting scalable front-end interfaces, 
            deploying custom chatbot solutions, and executing comprehensive technical support.
          </p>

          {/* Social Links under Bio */}
          <div className="social-links-desktop">
            <a href="https://github.com/jsevvy1-cyber" target="_blank" rel="noreferrer">github ↗</a>
            <a href="https://www.linkedin.com/in/jan-allen-sevilla-0164a8419/" target="_blank" rel="noreferrer">linkedin ↗</a>
            <a href="https://www.facebook.com/janallen.sevilla/" target="_blank" rel="noreferrer">facebook ↗</a>
            <a href="https://www.instagram.com/_jsevii/" target="_blank" rel="noreferrer">instagram ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}