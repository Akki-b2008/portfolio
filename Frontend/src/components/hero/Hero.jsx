import React from "react";
import "./hero.scss";
import heroImg from "../../assets/hero.webp";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { SiCss3, SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const SKILLS = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <RiReactjsLine /> },
  { name: "Redux", icon: <TbBrandRedux /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Generative AI", icon: "AI" },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Github", icon: <FaGithub /> },
];

const Hero = () => {
  return (
    <section className="HeroStack" id="home">
      <div className="Hero">
        <div className="hero">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                <span className="hero__title-greeting">
                  Hello<span className="hero__title-dot">.</span>
                </span>
                <span className="hero__title-name">
                  <span className="hero__title-line" aria-hidden="true" />
                  I&apos;m Akash
                </span>
                <span className="hero__title-role"><span className="stack">MERN</span> Developer</span>
              </h1>

              <div className="hero__cta">
                <a className="btn btn--primary" href="#projects">
                  View my work
                </a>
                <a
                  className="btn btn--ghost"
                  href="https://drive.google.com/file/d/1UtPmZLtOq3_AIVbIPrxc99ENg_m-Tart/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__glow" aria-hidden="true" />

              <figure className="hero__avatar">
                <img src={heroImg} alt="Akash portrait" loading="lazy" />
              </figure>

              <div className="hero__card" role="status">
                <span className="hero__card-title">
                  Full-stack (Mern stack) Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HeroMarquee" aria-hidden="true">
        <div className="hero__marquee">
          <div className="hero__marquee-track">
            {[...SKILLS, ...SKILLS].map(({ name, icon }, index) => (
              <span className="hero__marquee-item" key={`${name}-${index}`}>
                <span className="hero__marquee-icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="hero__marquee-label">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
