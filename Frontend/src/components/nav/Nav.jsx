import React, { useEffect, useState, useCallback } from "react";
import "./nav.scss";

const LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__brand">MERN Developer</a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map(({ href, label }) => (
            <a key={label} href={href} className="nav__link">
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="nav__toggle-line" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`nav__drawer ${open ? "nav__drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={(event) => {
          if (event.target.classList.contains("nav__drawer")) close();
        }}
      >
        <aside className="nav__panel" onClick={(event) => event.stopPropagation()}>
          <div className="nav__panel-header">
            <span className="nav__panel-title">MERN Developer</span>
            <button type="button" className="nav__panel-close" onClick={close} aria-label="Close menu">
              ×
            </button>
          </div>

          <nav className="nav__panel-links" aria-label="Mobile">
            {LINKS.map(({ href, label }) => (
              <a key={label} href={href} onClick={close}>
                {label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Nav;
