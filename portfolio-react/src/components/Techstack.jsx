export default function TechStack() {
  const stack = [
    {
      category: "Software Engineering & Web Development",
      skills: [
        "JavaScript", "TypeScript", "React.js", "Node.js", "React Native", 
        "Python", "Java", "C++", "C#", "PHP", "HTML5", "CSS3", 
        "Tailwind CSS", "Full-Stack Architecture", "RESTful Concepts", 
        "Marzipano Engine", "Software Architecture"
      ]
    },
    {
      category: "IT Support, Infrastructure & Systems Analysis",
      skills: [
        "Hardware Assembly & Troubleshooting", "OS Installation & Configuration", 
        "Software Diagnostics", "Systems Analysis & Design", "Server Management", 
        "XAMPP", "Network Setup", "CyberSecurity Level 1"
      ]
    },
    {
      category: "Data Analysis & Database Management",
      skills: [
        "MySQL", "SQL", "AI/ML Data Quality Engineering", 
        "Relational Database Schema Optimization"
      ]
    },
    {
      category: "Developer Tools & Cloud Environments",
      skills: [
        "Git/GitHub", "Docker", "Google Cloud Platform (GCP)", 
        "Visual Studio Code", "Android Studio", "Android SDK", 
        "Figma", "UI/UX Design"
      ]
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <h2>Tech Stack</h2>
      <p className="tech-stack-desc">
        The tools, frameworks, and platforms I reach for across software engineering, web development, IT infrastructure, and database management.
      </p>

      <div className="tech-categories">
        {stack.map((group, idx) => (
          <div key={idx} className="tech-group">
            <h3 className="tech-category-title">{group.category}</h3>
            <div className="tech-tags-wrapper">
              {group.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}