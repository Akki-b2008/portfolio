import React from "react";
import "./contact.scss";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  {
    label: "Email",
    handle: "rathoreakash2356@gmail.com",
    href: "mailto:rathoreakash2356@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "LinkedIn",
    handle: "akash rathore",
    href: "https://www.linkedin.com/in/akash-rathore-652955239/",
    icon: <FiLinkedin />,
  },
  {
    label: "Twitter/X",
    handle: "@Akashb_2008",
    href: "https://x.com/Akashb_2008",
    icon: <FaXTwitter />,
  },
  {
    label: "GitHub",
    handle: "Akki-b2008",
    href: "https://github.com/Akki-b2008",
    icon: <FiGithub />,
  },
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name") ?? "";
    const email = form.get("email") ?? "";
    const message = form.get("message") ?? "";
    const body = encodeURIComponent(`Hi Akash,%0D%0A%0D%0A${message}%0D%0A%0D%0A- ${name} (${email})`);
    window.open(`mailto:hello@akashcodes.dev?subject=Let%27s work together&body=${body}`);
    event.currentTarget.reset();
  };

  return (
    <section className="Contact" id="contacts">
      <div className="contact__inner">
        <header className="contact__header" data-animate style={{ "--delay": "0s" }}>
          <p className="contact__eyebrow">Let&apos;s collaborate</p>
          <h2 className="contact__title">Tell me what you want to build.</h2>
          <p className="contact__copy">
            Share a quick brief and I will reply fast with next steps, timelines, and how we can get the project moving.
          </p>
        </header>

        <form className="contact__form" onSubmit={handleSubmit} data-animate style={{ "--delay": "0.18s" }}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="contact__field contact__field--textarea">
            <label htmlFor="message">How can I help?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share the idea, timeline, or challenge you want solved."
              required
            />
          </div>
          <button type="submit" className="contact__submit">Send message</button>
        </form>

        <div className="contact__socials" data-animate style={{ "--delay": "0.32s" }}>
          <p className="contact__socials-text">Prefer socials? Reach me here.</p>
          <ul className="contact__social-list">
            {SOCIALS.map(({ label, handle, href, icon }) => (
              <li key={label} className="contact__social">
                <a href={href} target="_blank" rel="noreferrer">
                  <span className="contact__social-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="contact__social-label">{label}</span>
                  <span className="contact__social-handle">{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
