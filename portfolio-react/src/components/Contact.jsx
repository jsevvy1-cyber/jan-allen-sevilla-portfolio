import { useState } from 'react';

export default function Contact() {
  const [showOptions, setShowOptions] = useState(false);
  const email = "jsevvy1@gmail.com";

  // Provider web URLs with pre-filled destination address
  const providers = [
    {
      name: "Gmail",
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      color: "#EA4335"
    },
    {
      name: "Yahoo Mail",
      url: `https://compose.mail.yahoo.com/?to=${email}`,
      color: "#6001D2"
    },
    {
      name: "Outlook / Hotmail",
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      color: "#0078D4"
    },
    {
      name: "Default Mail App (Apple Mail, Windows Mail, etc.)",
      url: `mailto:${email}`,
      color: "#38bdf8"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <p>
          I am actively seeking software engineering and IT opportunities. Feel free to reach out!
        </p>
        <p><strong>Location:</strong> Quezon City, Metro Manila, Philippines</p>
        <p><strong>Phone:</strong> +63 960 454 4968</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      {/* Main Trigger Button */}
      <div className="email-container" style={{ position: 'relative', display: 'inline-block' }}>
        <button 
          onClick={() => setShowOptions(!showOptions)}
          className="btn-primary email-btn"
          style={{ cursor: 'pointer' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Send Email {showOptions ? '▲' : '▼'}
        </button>

        {/* Dynamic Provider Dropdown Menu */}
        {showOptions && (
          <div className="email-options-menu">
            <p className="menu-header">Select your email service:</p>
            {providers.map((provider, index) => (
              <a
                key={index}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className="email-option-link"
                onClick={() => setShowOptions(false)}
              >
                <span className="dot" style={{ backgroundColor: provider.color }}></span>
                {provider.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}