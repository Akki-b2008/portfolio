import React, { useEffect, useState, useCallback } from 'react'
import './nav.scss'

const Nav = () => {
  const [open, setOpen] = useState(false)

  // lock body scroll when menu open and set nav-open class
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.classList.remove('nav-open')
      document.body.style.overflow = ''
    }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggle = () => setOpen((s) => !s)

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <div className="nav-logo">Akash Rathore</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`nav-overlay ${open ? 'open' : ''}`}
        role="dialog"
        aria-hidden={!open}
        onClick={(e) => {
          // close if clicking on backdrop area (not the panel itself)
          if (e.target.classList.contains('nav-overlay')) close()
        }}
      >
        <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
          <div className="overlay-top">
            <div className="overlay-logo">Akash Rathore</div>
            <button className="overlay-close" onClick={close} aria-label="Close menu">×</button>
          </div>

          <nav className="overlay-links">
            <a href="#" onClick={close}>Home</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#contacts" onClick={close}>Contacts</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav
