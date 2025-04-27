import { useState, useEffect, useRef } from "react";
import "../assets/Homepage.css";
import CustomScrollbar from "./CustomScrollbar";
import Contact from "./Contact";
// import Dropdown from "./Team";

//Project's data! 
const projectsData = [
//  in obj format
  //Add projects here!!
];

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const laptopContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Function to handle scroll animation
  const handleScroll = () => {
    if (!laptopContainerRef.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const laptopElement = laptopContainerRef.current;
    const laptopRect = laptopElement.getBoundingClientRect();

    const visibleHeight =
      Math.min(windowHeight, laptopRect.bottom) - Math.max(0, laptopRect.top);

    const maxScroll = windowHeight * 0.6; 
    const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

    setScrollProgress(progress);
    setIsFullyScrolled(progress >= 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = document.getElementById("laptop-video");
    if (video) {
      video.playbackRate = 0.75; 
    }
  }, []);

  const laptopStyle = {
    transform: `
      perspective(2000px)
      rotateX(${15 - scrollProgress * 15}deg)
      scale(${0.8 + scrollProgress * 0.8})
      translateY(${scrollProgress * -20}vh)
    `,
    transition: "transform 0.3s ease-out",
  };

  const screenStyle = {
    transform: `translateY(${scrollProgress * -2}%)`,
    borderRadius: `${20 - scrollProgress * 20}px ${
      20 - scrollProgress * 20
    }px 0 0`,
    transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
  };

  const contentStyle = {
    opacity: isFullyScrolled ? 1 : 0,
    visibility: isFullyScrolled ? "visible" : "hidden",
    transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
    marginTop: "100vh",
  };

  const progressBarStyle = {
    width: `${Math.min(scrollProgress * 100, 100)}%`,
    transition: "width 0.1s ease-out",
  };

  const [progress, setProgress] = useState(0);
  const labels = [
    "Initializing Nexura.param ...",
    "Injecting creativity.fig...",
    "Redesigning innovation...",
    "Testing Design...",
    "Execution complete ✅"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; 
        } else {
          return prev + 25; 
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const labelIndex = progress / 25; 


  return (
    <div className="homepage">
      <CustomScrollbar />
     
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={progressBarStyle}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div
          className="laptop-container"
          ref={laptopContainerRef}
          style={laptopStyle}
        >
          <div className="laptop-frame">
            <div className="laptop-screen" style={screenStyle}>
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  <video id="laptop-video" autoPlay muted loop playsInline>
                    <source
                      src={import.meta.env.BASE_URL + "laptop_bg.mov"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay"></div>
                </div>

                <div className="laptop-header">
                  <div className="laptop-logo">
                    <span className="logo-dot"></span>
                    Nexura
                  </div>
                </div>
                <div className="laptop-body">
                  <div className="hero-content">
                    <h1>
                      <span>&lt; Nexura &gt;</span>
                      Design That Thinks
                    </h1>
                    <p>Procedural forms. Parametric logic.</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">Learn More</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                  <div className="analyzing-text">
        {labels[labelIndex]} 
        <span className="percentage"> {progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transition: progress === 0 ? "none" : "width 1s ease-in-out"
          }}
        ></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

  
        <div
          className={`scroll-down-indicator ${
            scrollProgress > 0.1 ? "fade-out" : ""
          }`}
        >
          <div className="scroll-arrow"></div>
          <div className="scroll-text">Scroll to Fetch</div>
        </div>
      </section>

 
      <section id="features" className="features">
        <h2>WHY US?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Mentorship That Matters</h3>
            <p>
              Learn from experienced developers who guide you through every
              challenge.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Experience</h3>
            <p>
              Build real-world projects, join hackathons, and go beyond just
              theory.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Collaboration</h3>
            <p>Connect, code, and create with like-minded tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust & Reliability</h3>
            <p>
              Whether for college projects or professional freelancing, we
              prioritize transparency, security, and quality in every project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>
            For GEEKS <span className="small">(Designers)</span>
          </h2>
          <p>
          Design is where ideas take visual form. Our designers are the storytellers of the club, crafting interfaces, posters, brand identities, and experiences that resonate. From pixel-perfect UI/UX for apps to bold event posters and social media creatives — they bring clarity and emotion to every project.


          </p>
          <p>
          Collaboration is at the heart of what they do. Whether it’s teaming up with developers for seamless user flows or working with the PR team for eye-catching promotions, designers make sure every piece not only looks great but feels right. They blend creativity with purpose to make the club’s vision truly visible.
          </p>
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>What Sets Our Designers Apart</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Design Without Limits
            </h3>
            <p>
            We craft for screens of all shapes and sizes — websites, apps, posters, or reels — with a vision-first approach.

            </p>
          </div>
          <div className="service-card">
            <h3>Style with a Statement
            </h3>
            <p>
            Think bold fonts, layered textures, high contrast, and visuals that demand attention.
            </p>
          </div>
          <div className="service-card">
            <h3>Themes That Tell Stories
            </h3>
            <p>
            Whether it’s glitch-core, vaporwave, or torn-paper zines — our design isn’t just pretty, it speaks.
            </p>
          </div>
          <div className="service-card">
            <h3>Built Around People
            </h3>
            <p>
            Every design is tested for real users. Because great design doesn’t just look good — it feels right            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      {/* <section id="projects" className="services">
        <h2>Our Projects</h2>
        <div className="services-container">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              cardTitle={project.cardTitle}
              cardDescription={project.cardDescription}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              author={project.author}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section> */}

      {/* Team section to be added later */}
      {/* <section id="Team" className="services">
        <h2>Brains Behind the Design</h2>
        <Dropdown />
      </section> */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Nexura</h2>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Projects</a>
                </li>
                <li>
                  <a href="#open-source">About Us</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#">Main Website</a>
                </li>
                <li>
                  <a href="#">Join Us</a>
                </li>
                <li>
                  <a href="#">Website Designing Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="social-links">
                <li>
                  <a href="https://github.com/NexuraRGPV">GitHub</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nexura_rgpv/">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nexura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
