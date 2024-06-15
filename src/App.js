import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup function to clear interval
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>ANANYA SHUKLA</h1>
        <h3>SOFTWARE DEVELOPER</h3>
        <div className="socials">
          <img src="/images/github.svg" alt="GitHub" />
          <img src="/images/linkedn.svg" alt="LinkedIn" />
          <img src="/images/mail.svg" alt="Email" />
        </div>
        <div className="time-and-flag">
          <p>Current Time : {currentTime} in 🇮🇳</p>
        </div>
        <div className="green-strip"></div>
        <div className="tabs">
          <div
            className={activeTab === "about" ? "tab active" : "tab"}
            onClick={() => {
              setActiveTab("about");
              scrollToRef(aboutRef);
            }}
          >
            About Me
          </div>
          <div
            className={activeTab === "techStack" ? "tab active" : "tab"}
            onClick={() => {
              setActiveTab("techStack");
              scrollToRef(techStackRef);
            }}
          >
            TechStack
          </div>
          <div
            className={activeTab === "experience" ? "tab active" : "tab"}
            onClick={() => {
              setActiveTab("experience");
              scrollToRef(experienceRef);
            }}
          >
            Experience
          </div>
          <div
            className={activeTab === "contact" ? "tab active" : "tab"}
            onClick={() => {
              setActiveTab("contact");
              scrollToRef(contactRef);
            }}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="content">
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="techStackRef" ref={techStackRef}>
            <TechStack />
          </div>
          <div id="projects" ref={experienceRef}>
            <Experience />
          </div>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
