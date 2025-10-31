import { useEffect, useRef, useState } from "react";
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

const TOAST_DURATION_MS = 4200;

const Contact = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimeoutRef = useRef(null);

  const showToast = (message) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    setIsToastVisible(true);
    toastTimeoutRef.current = window.setTimeout(() => {
      setIsToastVisible(false);
    }, TOAST_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    event.currentTarget.reset();
    showToast("Thanks! I will reach out shortly.");
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
        {isToastVisible && (
          <div className="contact__toast" role="status" aria-live="polite">
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
