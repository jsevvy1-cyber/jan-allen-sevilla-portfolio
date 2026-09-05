import React, { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const email = "jsevvy1@gmail.com";
  const subject = encodeURIComponent("Inquiry / Collaboration");
  const body = encodeURIComponent("Hi Jan,\n\nI reached out through your portfolio...");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      
      <div className="contact-info">
        <p>I am actively seeking software engineering and IT opportunities. Feel free to reach out!</p>
        <p><strong>Location:</strong> Quezon City, Metro Manila, Philippines</p>
        <p><strong>Phone:</strong> +63 960 454 4968</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
        <button 
          className="btn-primary" 
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          ✉ Send Email {isOpen ? '▲' : '▼'}
        </button>

        {isOpen && (
          <div className="email-options-menu">
            <div className="menu-header">Select your email service</div>
            
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="email-option-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="dot dot-gmail" /> Gmail
            </a>

            <a 
              href={`https://compose.mail.yahoo.com/?to=${email}&subject=${subject}&body=${body}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="email-option-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="dot dot-yahoo" /> Yahoo Mail
            </a>

            <a 
              href={`https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="email-option-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="dot dot-outlook" /> Outlook / Hotmail
            </a>

            <a 
              href={`mailto:${email}?subject=${subject}&body=${body}`} 
              className="email-option-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="dot dot-default" /> Default Mail App (Apple Mail, Windows Mail)
            </a>
          </div>
        )}
      </div>
    </section>
  );
}