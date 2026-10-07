export default function TechStack() {
  const stack = [
    {
      category: "Front-End Development",
      skills: [
        " JavaScript (ES6+)", "TypeScript", "React.js", "React Native", 
        "Python", "Java", "C++", "C#", "PHP", "HTML5", "CSS3", 
        "Tailwind CSS", "Marzipano Engine", "UI/UX Design"   
      ]
    },

    {
      category: "Back-End Development",
      skills: [ 
        "Python", "Java", "C++", "C#", "PHP", "RESTful API", "Node.js", "Laravel", "XAMPP" 
      ]
    },

    {
      category: "IT Support, Infrastructure & Systems Analysis",
      skills: [
        "Hardware Assembly & Diagnostics", "OS Installation & Deployment", 
        "Server Management", "Active Directory", "Cybersecurity Fundamentals", 
        "Web Server Admin (Apache/MySQL)", "Systems Analysis & Design", "Server Management & Web Hosting", "Network Troubleshooting", "Ticketing Systems (service desk-simulator)", "Network Setup & Configuration"
      ]
    },
    {
      category: "Data Analysis & Database Management",
      skills: [
        "MySQL", "SQL", "AI/ML Data Quality Engineering",
        "Relational Database Schema Optimization", "Microsoft Power BI", "PostgreSQL"
      ]
    },
    {
      category: "AI Tools & ML Development",
      skills: [
        "ChatGPT", "GPT-6 Luna", "GPT-6 Sol", "Codex",
        "Claude", "Opus 5.5", "Sonnet 5.5", "Github Copilot", "Prompt Engineering", "AI/ML Data Quality Engineering", "Data Annotation"
      ]
    },
    {
      category: "Developer Tools & Cloud Environments",
      skills: [
        "Git/GitHub", "Docker", "Google Cloud Platform (GCP)", 
        "Visual Studio Code", "Android Studio", "Android SDK", 
        "Figma", "Vercel"
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