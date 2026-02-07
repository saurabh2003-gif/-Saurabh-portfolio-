import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About Me" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

function Navbar() {
  return (
    <header className="kd-nav">
      <div className="kd-container kd-nav-inner">
        <div className="kd-nav-left">
          <div className="kd-logo-circle">SS</div>
          <div className="kd-logo-text">
            <div className="kd-logo-name">Saurabh Shetkar</div>
            <div className="kd-logo-sub">AI • Cloud • Developer</div>
          </div>
        </div>

        <nav className="kd-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="kd-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="kd-hero-section">
      <div className="kd-container kd-hero">
        <motion.div
          className="kd-hero-photo-wrap"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="kd-hero-photo-ring">
            <div className="kd-hero-photo-inner">SS</div>
          </div>
        </motion.div>

        <motion.div
          className="kd-hero-content"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="kd-hero-eyebrow">
            Software Developer • AI/ML Enthusiast • Cloud Explorer
          </p>
          <h1 className="kd-hero-title">
            Hi, I&apos;m{" "}
            <span className="kd-hero-highlight">Saurabh Shetkar</span>
          </h1>
          <p className="kd-hero-subtitle">
            B.Tech student at VIIT Pune specializing in AI, Cloud, and IoT. I focus on building security-first AI methodologies, automated trading systems, and scalable cloud architectures.
          </p>

          <div className="kd-pill-row">
            <span className="kd-pill">Deep Learning (CNN)</span>
            <span className="kd-pill">NLP</span>
            <span className="kd-pill">AWS & Cloud</span>
            <span className="kd-pill">Python & C++</span>
            <span className="kd-pill">Linux Admin (RHCSA)</span>
          </div>

          <div className="kd-info-row">
            <div className="kd-info-card">
              <div className="kd-info-title">📍 Location</div>
              <div className="kd-info-text">Pune, Maharashtra, India</div>
            </div>
            <div className="kd-info-card">
              <div className="kd-info-title">🧠 Expertise</div>
              <div className="kd-info-text">AI/ML, DevOps, IoT Cloud</div>
            </div>
            {/* Added style to prevent email overflow */}
            <div className="kd-info-card">
              <div className="kd-info-title">📩 Contact</div>
              <a href="mailto:saurabhshetkar2003@gmail.com" className="kd-info-text" style={{ whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                saurabhshetkar2003@gmail.com
              </a>
            </div>
          </div>

          <div className="kd-social-section">
            <p className="kd-social-title">Connect with me</p>
            <div className="kd-social-row">
              {/* Updated GitHub link */}
              <a className="kd-social-icon" href="https://github.com/saurabh2003-gif" target="_blank" rel="noreferrer">GH</a>
              <a className="kd-social-icon" href="https://www.linkedin.com/in/saurabh-shetkar-2a3529336/" target="_blank" rel="noreferrer">in</a>
              {/* Updated Gmail link */}
              <a className="kd-social-icon" href="mailto:saurabhshetkar2003@gmail.com">✉</a>
              {/* Added phone link */}
              <a className="kd-social-icon" href="tel:+918830561178">📞</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="kd-section">
      <div className="kd-container">
        <div className="kd-section-header">
          <h2 className="kd-section-title">{title}</h2>
          {subtitle && <p className="kd-section-subtitle">{subtitle}</p>}
        </div>
        <div className="kd-section-content">{children}</div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "AI-Based Deepfake Detection (Veritas)",
      description: "A security-focused deep learning pipeline using CNNs and perplexity heatmaps to detect AI-generated text and media manipulations.",
      tags: ["Python", "CNN", "Security", "NLP"],
      codeLink: "https://github.com/Saurabh2-0-0-3/veritas-ai-scanner",
      liveLink: "https://veritas-ai-scanner-pqfe2wye4cwms2gzwpxygx.streamlit.app/",
      icon: "🕵️♂️",
      type: "featured"
    },
    {
      title: "Quantum AI Trader (NSE)",
      // Description based on the technical report [cite: 1, 2]
      description: "An autonomous algorithmic trading agent (Quantum Sentinel V10.0) using a 3-layer decision matrix: Technical indicators, Fundamental health, and NLP sentiment analysis[cite: 5, 24, 25].",
      tags: ["NLP", "Python", "Finance", "NSE API"],
      // This link points to the file in your public folder
      readLink: "/AI Trading bot file.pdf",
      icon: "📈",
      type: "private"
    },
    {
      title: "IoT Sleep Apnea Detection System",
      description: "Architected a health-tech solution using ESP32 and MAX30102 sensors to monitor SpO2/Heart Rate, syncing real-time data to Firebase for clinical analysis.",
      tags: ["ESP32", "Firebase", "Embedded C", "Cloud"],
      readLink: "/Sleep apena.pdf", // Suggestion: Link to a PDF or a hidden page
      icon: "😴",
      type: "private"
    },
  ];

  return (
    <Section id="projects" title="Projects" subtitle="Technical systems focused on AI, Cloud, and Security.">
      <div className="kd-project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="kd-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
          >
            <div className="kd-project-image">
              <span className="kd-project-icon">{project.icon}</span>
              <span className="kd-project-image-text">Project Preview</span>
            </div>
            <div className="kd-project-body">
              <h3 className="kd-project-title">{project.title}</h3>
              <p className="kd-project-desc">{project.description}</p>
              <div className="kd-chip-row">
                {project.tags.map((tag) => <span className="kd-chip" key={tag}>{tag}</span>)}
              </div>
              <div className="kd-project-actions">
                {project.type === "featured" ? (
                  <>
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="kd-btn kd-btn-ghost" style={{ textDecoration: 'none' }}>Code</a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="kd-btn kd-btn-primary" style={{ textDecoration: 'none' }}>Live</a>
                  </>
                ) : (
                  <a
                    href={project.readLink}
                    target="_blank"
                    rel="noreferrer"
                    className="kd-btn kd-btn-primary"
                    style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}
                  >
                    Read
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function SkillsSection() {
  const skills = [
    { label: "Python", type: "emoji", icon: "🐍" },
    { label: "Deep Learning", type: "emoji", icon: "🧠" },
    { label: "AWS", type: "img", src: "https://icongr.am/devicon/amazonwebservices-original.svg?size=80" },
    { label: "Red Hat Linux", type: "emoji", icon: "🎩" },
    { label: "NLP", type: "emoji", icon: "🗣️" },
    { label: "Microsoft Power BI", type: "emoji", icon: "📊" },
    { label: "IoT/ESP32", type: "emoji", icon: "🔌" },
    { label: "Pandas", type: "emoji", icon: "🐼" },
    { label: "Bash", type: "emoji", icon: "🐚" },
  ];

  return (
    <Section id="skills" title="My Skills" subtitle="Technical arsenal from AI to DevOps.">
      <div className="kd-skills-panel">
        <div className="kd-skills-orbit">
          {skills.map((skill, index) => {
            // This 'amp' variable creates the unique floating movement for each bubble
            const amp = 10 + (index % 3) * 4;
            return (
              <motion.div
                key={skill.label}
                className="kd-skill-orbit-item"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={{
                  y: [0, -amp, amp * 0.6, -amp * 0.4, 0],
                  x: [0, 6, -5, 3, 0]
                }}
                transition={{
                  duration: 7 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                  repeatType: "mirror"
                }}
                whileHover={{ scale: 1.12 }}
              >
                <div className="kd-skill-circle">
                  {skill.type === "img" ? (
                    <img src={skill.src} alt={skill.label} className="kd-skill-icon-img" />
                  ) : (
                    <span className="kd-skill-icon">{skill.icon}</span>
                  )}
                </div>
                <p className="kd-skill-label">{skill.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" subtitle="Professional background in engineering and game development.">
      <div className="kd-timeline">
        <div className="kd-timeline-item">
          <div className="kd-timeline-dot" />
          <div className="kd-timeline-content">
            <h3>Game Developer — FIREBIRDVR</h3>
            <p className="kd-timeline-location">Pune, India • July 2025 – Dec 2025</p>
            <ul>
              <li>Engineered 'FixWith Python', integrating programming challenges into gameplay.</li>
              <li>Architected dynamic narrative modules and logic systems, optimizing performance.</li>
              <li>Collaborated with teams to align mechanics with pedagogical goals, improving engagement.</li>
              <li>Developed adaptive scripting to personalize difficulty based on real-time performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  return (
    <Section id="certificates" title="Certificates" subtitle="Professional validations of technical expertise.">
      <div className="kd-cert-row">
        <motion.div
          className="kd-cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="kd-cert-image">
            {/* Using official Red Hat badge from Credly as placeholder */}
            <img
              src="https://images.credly.com/size/340x340/images/6b01b69d-2c7c-4740-97b5-22783850554d/Red_Hat_Certified_System_Administrator_-_RHCSA.png"
              alt="RHCSA Badge"
              className="kd-cert-img-real"
              style={{ padding: '20px', objectFit: 'contain' }}
            />
          </div>

          <div className="kd-cert-body">
            <h3 className="kd-cert-title">Red Hat Certified System Administrator (RHCSA)</h3>
            <p className="kd-cert-meta">Red Hat • 2024</p>

            <div style={{ marginTop: '12px' }}>
              <a
                href="/RedHat course Certification.pdf"
                target="_blank"
                rel="noreferrer"
                className="kd-btn kd-btn-ghost"
                style={{ width: '100%', textDecoration: 'none', fontSize: '12px' }}
              >
                View Certificate (PDF) ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function ResumeSection() {
  return (
    <Section id="resume" title="Resume" subtitle="Academic background and core credentials.">
      <div className="kd-resume-grid">
        <div className="kd-resume-main">
          <h3 className="kd-resume-name">SAURABH SHETKAR</h3>
          <p className="kd-resume-role">B.Tech in Electronics & Telecommunications Engineering</p>
          <p className="kd-resume-meta">📍 Pune • ✉ saurabhshetkar2003@gmail.com</p>
          <div className="kd-resume-download">
            <a href="resume.pdf" className="kd-resume-download-btn" download target="_blank" rel="noreferrer">⬇ Download Resume (PDF)</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

const NetworkVisual = () => (
  <div className="kd-achievement-visual">
    <div className="kd-achievement-visual-label">NETWORK ANALYSIS MODEL</div>
    <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ opacity: 0.8 }}>
      {/* Connections */}
      <motion.path
        d="M40 80 L100 40 L160 80 L100 120 Z M100 40 L100 120 M40 80 L160 80"
        stroke="rgba(0, 229, 255, 0.3)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Nodes */}
      {[
        { cx: 40, cy: 80 },
        { cx: 100, cy: 40 },
        { cx: 160, cy: 80 },
        { cx: 100, cy: 120 },
        { cx: 100, cy: 80 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="#00e5ff"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
        />
      ))}
      <motion.circle
        cx="100"
        cy="80"
        r="30"
        stroke="rgba(0, 229, 255, 0.2)"
        strokeWidth="1"
        fill="none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  </div>
);

const ChartVisual = () => (
  <div className="kd-achievement-visual">
    <div className="kd-achievement-visual-label">LIVE DATA VISUALIZATION</div>
    <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ opacity: 0.9 }}>
      {/* Grid lines */}
      <line x1="20" y1="140" x2="180" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Bars/Graph */}
      <motion.path
        d="M20 140 L50 100 L80 120 L110 60 L140 90 L180 40"
        stroke="#0aff9d"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Area under curve */}
      <motion.path
        d="M20 140 L50 100 L80 120 L110 60 L140 90 L180 40 L180 140 L20 140 Z"
        fill="url(#chartGradient)"
        style={{ opacity: 0.3 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0aff9d" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Floating points */}
      {[
        { cx: 50, cy: 100 },
        { cx: 80, cy: 120 },
        { cx: 110, cy: 60 },
        { cx: 140, cy: 90 },
        { cx: 180, cy: 40 },
      ].map((pt, i) => (
        <motion.circle
          key={i}
          cx={pt.cx}
          cy={pt.cy}
          r="3"
          fill="#ffffff"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 + i * 0.1 }}
        />
      ))}
    </svg>
  </div>
);

function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Team Lead & 1st Prize Winner",
      subtitle: "Vishwacon 2024 (Springer Nature) | AI in Healthcare",
      icon: "🏆",
      points: [
        "Led the team to win 1st Prize at the AI in Healthcare Product Conclave for a Sleep Apnea Detection system.",
        "Architected a real-time monitoring solution using ESP32 & MAX30102 to track SpO2 and heart rate patterns.",
        "Developed intelligent algorithms to identify potential apnea events and trigger alerts for critical anomalies.",
        "Built a cloud-integrated dashboard using Firebase to visualize patient vitals securely and remotely."
      ],
      visual: <ChartVisual />,
      link: "#" // No specific link provided for this one, making it standard
    },
    {
      id: 2,
      title: "Research Author & Presenter",
      subtitle: "IJEEDC Journal & IRCSTEM Conf. | Data Science",
      icon: "📜", // Using scroll for research
      points: [
        "Authored and published \"A Comparative Framework for Analyzing Runway Availability\" in the IJEEDC Journal.",
        "Presented research findings at the IRCSTEM Conference, demonstrating analytical rigor and public speaking skills.",
        "Utilized advanced data analysis frameworks to model and optimize runway usage efficiency.",
        "Contributed to the field of aviation logistics through data-driven comparative studies."
      ],
      visual: <NetworkVisual />,
      link: "https://iraj.in/journal/IJEEDC/paper_detail.php?paper_id=21766&nameA_Comparative_Framework_for_Analyzing_Runway_Availability:_Backtracking,_Genetic_Algorithms_and_Simulated_Annealing_Approaches",
      isResearch: true
    }
  ];

  return (
    <Section id="achievements" title="Achievements" subtitle="Research and awards.">
      <div className="kd-achievements-grid">
        {achievements.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target={item.link !== "#" ? "_blank" : "_self"}
            rel={item.link !== "#" ? "noreferrer" : ""}
            className={`kd-achievement-card-link ${item.link === "#" ? "disabled-link" : ""}`}
            style={{ pointerEvents: item.link === "#" ? "none" : "auto", cursor: item.link === "#" ? "default" : "pointer" }}
          >
            <motion.article
              className="kd-achievement-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Visual */}
              {item.visual}

              {/* Right Content */}
              <div className="kd-achievement-content">
                <div className="kd-achievement-header">
                  <div className={`kd-achievement-icon-box ${item.isResearch ? 'research' : ''}`}>
                    {item.icon}
                  </div>
                  <div className="kd-achievement-titles">
                    <h3 className="kd-achievement-title">{item.title}</h3>
                    <p className="kd-achievement-subtitle">{item.subtitle}</p>
                  </div>
                </div>
                <ul className="kd-achievement-list">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="kd-achievement-item">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </a>
        ))}
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="My core interests.">
      <p>Electronics & Telecommunications Engineering undergraduate at VIIT Pune with strong expertise in Artificial Intelligence, Machine Learning, Cloud Computing, and Embedded Systems. Experienced in building real-world solutions such as algorithmic trading platforms, IoT healthcare monitoring systems, and AI-driven media detection tools. Published researcher with hands-on industry experience in game-based learning platforms. Passionate about designing scalable, data-driven systems and applying AI to solve complex engineering challenges.</p>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's discuss AI, Cloud, or collaboration.">
      <div className="kd-social-row kd-contact-social-row">
        {/* Updated links here as well */}
        <a className="kd-social-icon" href="https://github.com/saurabh2003-gif" target="_blank" rel="noreferrer">GH</a>
        <a className="kd-social-icon" href="https://www.linkedin.com/in/saurabh-shetkar-2a3529336/" target="_blank" rel="noreferrer">in</a>
        <a className="kd-social-icon" href="mailto:saurabhshetkar2003@gmail.com">✉</a>
        {/* Added phone link */}
        <a className="kd-social-icon" href="tel:+918830561178">📞</a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="kd-footer">
      <div className="kd-container kd-footer-inner">
        <span>© {new Date().getFullYear()} Saurabh Shetkar</span>
        <span>Built with React & Framer Motion</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="kd-page">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
        <AchievementsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}