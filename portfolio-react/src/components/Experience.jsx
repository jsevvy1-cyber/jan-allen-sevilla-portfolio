import React from 'react';

const experienceData = [
  {
    role: "Software Engineer & IT Support Trainee",
    company: "Springfield School of Novaliches Inc.",
    url: "https://www.facebook.com/springfieldnovalichesinc",
    duration: "March 2026 - May 2026",
    location: "Novaliches, PH",
    details: [
      "Engineered a responsive web platform integrated with a custom 360-degree virtual tour using JavaScript and Marzipano engine.",
      "Developed and implemented an interactive FAQ chatbot service to automate client query processing.",
      "Implemented modular, cross-device front-end UI components using Tailwind CSS for low-latency rendering.",
      "Administered OS installation, configuration, hardware troubleshooting, and software diagnostics."
    ]
  },
  {
    role: "AI Data Pipeline Reviewer & Core Annotator",
    company: "Atlas Capture LLC",
    url: "https://www.atlascapture.io/",
    duration: "December 2025 - May 2026",
    location: "Remote",
    details: [
      "Audited and validated complex dataset structures and labeling pipelines to train production-grade AI/ML models with high precision.",
      "Conducted technical QA on data integrity, enforcing continuous validation logic and technical taxonomy standards."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>
              {exp.role} —{" "}
              <a 
                href={exp.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company"
              >
                {exp.company}
              </a>
            </h3>
            <p className="exp-meta">{exp.duration} | {exp.location}</p>
            <ul>
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}