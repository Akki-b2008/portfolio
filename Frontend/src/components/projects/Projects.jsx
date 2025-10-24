import React from "react";
import "./projects.scss";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    title: "RoastMedia",
    category: "AI-powered social media platform",
    description:
      "Next-gen social platform where users post, live chat, and generate five Gemini caption options that range from roasts to advice before sharing.",
    stack: [
      "React",
      "Express",
      "MongoDB",
      "Axios",
      "React Hook Form",
      "Socket.io",
      "Gemini AI",
      "ImageKit",
    ],
    repo: "https://github.com/NeerajX-code/RoastMedia_Frontend",
    repo: "https://github.com/NeerajX-code/RoastMedia_Backend",
    live: "https://roastmedia-backend.onrender.com/",
    note: "Hosted on Render free tier — server cold starts may take ~30-40 seconds.",
    snippet: [
      "AI-generated captions across roast, shayari, advice, sarcasm",
      "Realtime 1:1 conversations handled with Socket.io",
      "Gemini-backed creativity for every post",
      "Reliable uploads and transforms through ImageKit",
      "Built on a production-ready MERN stack",
    ],
    accent: "#ff6b58",
  },
  {
    title: "SharmaJI",
    category: "Realtime AI chatbot",
    description:
      "Conversational AI that streams Gemini responses instantly, keeps short-term context, and feels responsive without reloads.",
    stack: ["React", "Express", "MongoDB", "Socket.io", "Gemini AI", "Node.js"],
    repo: "https://github.com/Akki-b2008/AiChatbot",
    live: "https://ai-chatbot-alpha-five-32.vercel.app/",
    note: "Hosted on Render free tier — server cold starts may take ~30-40 seconds.",
    snippet: [
      "Realtime AI outputs delivered over Socket.io",
      "Short-term memory maintains conversational flow",
      "Gemini model powers adaptive replies",
      "Client and server stream messages in sync",
      "Engineered end-to-end with the MERN stack",
    ],
    accent: "#ff6b58",
  },
  {
    title: "ROSIER FOODS",
    category: "Frontend hackathon project",
    description:
      "Immersive solo hackathon build blending Framer Motion, GSAP, and responsive React components to tell a product story through motion.",
    stack: ["React", "Framer Motion", "GSAP"],
    repo: "https://github.com/Akki-b2008/Rosier-Products-hackathon",
    live: "https://rosier.vercel.app/",
    snippet: [
      "Crafted for a solo frontend hackathon",
      "Layered animations powered by Framer Motion and GSAP",
      "Component-based React architecture for maintainability",
      "Data fetching and orchestration handled with Axios",
      "Interactive form flows tuned for smooth handoffs",
    ],
    accent: "#ff6b58",
  },
];

const Projects = () => (
  <section className="Projects" id="projects">
    <div className="projects__inner">
      <header
        className="projects__header"
        data-animate
        style={{ "--delay": "0s" }}
      >
        <p className="projects__eyebrow">Projects</p>
      </header>

      <div className="projects__list">
        {PROJECTS.map(
          (
            {
              title,
              category,
              description,
              stack,
              repo,
              live,
              snippet,
              accent,
              note,
            },
            index
          ) => (
            <article
              className="project"
              key={title}
              data-animate
              style={{
                "--delay": `${0.18 + index * 0.08}s`,
                "--project-accent": accent,
              }}
            >
              <div className="project__body">
                <span className="project__category">{category}</span>
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>

                {note && <p className="project__note">{note}</p>}

                <ul className="project__stack">
                  {stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project__actions">
                  {repo && (
                    <a
                      className="project__button project__button--primary"
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Github
                    </a>
                  )}
                  {live && (
                    <a
                      className="project__button"
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <div className="project__media" aria-hidden="true">
                <div className="project__media-overlay" />
                <div className="project__media-content">
                  {snippet.map((line, idx) => (
                    <span key={`${title}-${idx}`}>{line}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  </section>
);

export default Projects;
