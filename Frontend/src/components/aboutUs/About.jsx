import React, { useEffect, useRef, useState } from "react";
import "./about.scss";
import { FaLaptopCode, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine, RiRobot2Line } from "react-icons/ri";

const TIMELINE = [
  {
    title: "HTML & CSS obsession",
    description:
      "Started with pure frontend experiments—landing pages, portfolio concepts, and layouts crafted from scratch.",
    icon: <FaLaptopCode />,
  },
  {
    title: "JavaScript playground",
    description:
      "Added motion and interactivity with JavaScript, building custom UI pieces and refining the craft of UX.",
    icon: <TbBrandJavascript />,
  },
  {
    title: "React & Redux systems",
    description:
      "Shipped dashboards and design systems while dialing in component architecture and state management.",
    icon: <RiReactjsLine />,
  },
  {
    title: "Node.js, Express & Mongo",
    description:
      "Built secure APIs, authentication flows, and Mongo-backed data layers ready for production loads.",
    icon: <FaNodeJs />,
  },
  {
    title: "Realtime AI builds",
    description:
      "Exploring Socket.IO and generative AI to create collaborative, always-on product experiences.",
    icon: <RiRobot2Line />,
  },
];

const METRICS = [
  { value: "Career-ready", label: "Full-stack MERN focus" },
  { value: "Multiple Projects", label: "Projects from concept to deploy" },
  { value: "100%", label: "Focus on product impact" },
];

const FOCUS = [
  "Launch often—every deploy is a checkpoint in my MERN journey.",
  "Use the stack wisely: React for product speed, Node/Express for backbone, MongoDB for growth.",
  "Stay curious—Socket.IO and generative AI open the door to what’s next.",
];

const About = () => {
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setTimelineProgress(0);
      return;
    }

    const updateProgress = () => {
      const element = timelineRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;

      if (elementHeight === 0) {
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + elementHeight;
      const scrollTop = window.scrollY;

      const offset = viewportHeight * 0.3;
      const start = elementTop - offset;
      const end = elementBottom - offset;

      if (end - start === 0) {
        setTimelineProgress(0);
        return;
      }

      const rawProgress = (scrollTop - start) / (end - start);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setTimelineProgress(clamped);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [isMobile]);

  return (
    <section className="About" id="about">
      <div className="about__inner">
        <aside
          className="about__timeline"
          data-animate
          style={{ "--delay": "0s" }}
        >
          <p className="about__timeline-heading">My development journey</p>
          <span className="about__timeline-axis" aria-hidden="true" />
          <span
            className="about__timeline-progress"
            aria-hidden="true"
            style={{ "--progress": timelineProgress }}
          />
          <ul className="about__timeline-list" ref={timelineRef}>
            {TIMELINE.map(({ title, description, icon }) => (
              <li className="about__timeline-item" key={title}>
                <span className="about__timeline-marker" aria-hidden="true">
                  <span className="about__timeline-icon">{icon}</span>
                </span>
                <div className="about__timeline-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="about__details">
          <div
            className="about__header"
            data-animate
            style={{ "--delay": "0.18s" }}
          >
            <p className="about__eyebrow">About me</p>
            <h2 className="about__title">
              MERN developer focused on shipping and learning fast.
            </h2>
            <p className="about__copy">
              Eight months into this MERN journey—and still building nonstop.
              From HTML/CSS roots to realtime AI, every project sharpens how I
              design, debug, and deliver. The plan stays simple: learn quickly,
              deploy often, and keep raising the bar for the products in my
              hands.
            </p>
            <ul className="about__focus-list">
              {FOCUS.map((item) => (
                <li className="about__focus-item" key={item}>
                  <span className="about__focus-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="about__metrics"
            data-animate
            style={{ "--delay": "0.32s" }}
          >
            {METRICS.map(({ value, label }) => (
              <div className="about__metric" key={value}>
                <span className="about__metric-value">{value}</span>
                <span className="about__metric-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
