"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Download,
  ArrowRight,
  ExternalLink,
  Mail,
  MessageCircle,
  GraduationCap,
  MapPin,
  Briefcase,
  Trophy,
  Users,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  X,
  Sparkles,
  Send,
  Terminal,
  Cpu,
  Layers,
  Database,
  Wrench,
  Flame,
} from "lucide-react";

// Brand SVG Icons
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  details: {
    overview: string;
    highlights: string[];
    role: string;
    github?: string;
    live?: string;
  };
}

const projectsData: Project[] = [
  {
    id: "hospital-queue",
    title: "Smart District Hospital Queue & Appointment System",
    description:
      "Online appointment booking, digital token generation, live queue tracking, doctor dashboard and admin console.",
    image: "/images/project_hospital.jpg",
    tags: ["Django", "MySQL", "React", "Bootstrap"],
    category: "Full-Stack",
    details: {
      overview:
        "Engineered a scalable hospital OPD management ecosystem resolving patient crowding at district health facilities. Features automated SMS token notifications, doctor scheduling algorithms, and analytics for district medical officers.",
      highlights: [
        "Reduced average outpatient patient waiting time by 48%",
        "Designed relational database schema in MySQL supporting 10,000+ daily tokens",
        "Implemented secure JWT role-based access for Doctors, Receptionists, and Admins",
        "Real-time token status updates with WebSocket event streaming",
      ],
      role: "Lead Full-Stack Developer",
      github: "https://github.com/rajwardhan/smart-district-hospital",
      live: "https://hospital-queue-demo.web.app",
    },
  },
  {
    id: "wildlife-habitat",
    title: "Wildlife Habitat Monitoring System",
    description:
      "Platform to identify changes in wildlife habitats using satellite and environmental data.",
    image: "/images/project_wildlife.jpg",
    tags: ["Python", "Geospatial", "AI/ML", "Sustainability"],
    category: "AI & Geospatial",
    details: {
      overview:
        "Cloud-native geospatial intelligence platform integrating Sentinel-2 multispectral imagery and ground sensor telemetry to monitor deforestation, animal migration corridors, and biodiversity health in protected biospheres.",
      highlights: [
        "Automated NDVI calculation pipeline processing satellite GeoTIFF files",
        "Real-time sensor telemetry processing for temperature, humidity, and animal GPS tags",
        "Interactive GIS map visualization with custom boundary polygon filters",
        "Early warning notification engine for habitat encroachment",
      ],
      role: "Backend & Geospatial Engineer",
      github: "https://github.com/rajwardhan/wildlife-habitat-monitor",
      live: "https://wildlife-monitor.example.com",
    },
  },
  {
    id: "emergency-triage",
    title: "AI-Powered Emergency Triage & Hospital Routing",
    description:
      "AI-based triage and routing system for emergencies. TechXcelerate 2K26 Winner.",
    image: "/images/project_triage.svg",
    tags: ["Next.js", "FastAPI", "AI", "Python"],
    category: "AI & Healthcare",
    details: {
      overview:
        "Emergency dispatch decision engine designed to route critical ambulances to hospitals with available trauma ICU beds and surgical teams based on AI symptom triage and live traffic congestion.",
      highlights: [
        "Awarded 1st Place at TechXcelerate 2K26 Hackathon",
        "Sub-2-second AI inference recommending optimal hospital destination",
        "Live ICU bed and ventilator availability tracker with sync hooks",
        "Intuitive emergency operator dashboard with audible priority alarms",
      ],
      role: "System Architect & AI Backend",
      github: "https://github.com/rajwardhan/ai-emergency-triage",
      live: "https://emergency-triage-ai.vercel.app",
    },
  },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeNav, setActiveNav] = useState("Home");
  const [codeCopied, setCodeCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterTag, setFilterTag] = useState<string>("All");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const copyCodeSnippet = () => {
    const code = `const rajwardhan = {
  role: "Full-Stack Developer",
  skills: ["Python", "Django", "Next.js"],
  focus: "Building real-world solutions",
  currently: "Improving and exploring new technologies",
  goal: "To create impactful products"
};`;
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rajwardhan.chawda@example.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleDownloadResume = () => {
    alert("Downloading Rajwardhan Singh Chawda's Resume (PDF)...");
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Rajwardhan_Singh_Chawda_Resume.pdf";
    link.click();
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const filteredProjects =
    filterTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(filterTag) || p.category === filterTag);

  return (
    <>
      {/* Ambient background glows */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="ambient-blob-3" />
      </div>

      {/* Top Floating Navigation Bar */}
      <header className="navbar-wrapper">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" onClick={() => setActiveNav("Home")}>
            <div className="logo-badge">
              <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="22" fill="#eff6ff" />
                <path
                  d="M26 32h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H38v14H26V32zm12 22h12c3.3 0 6-2.7 6-6s-2.7-6-6-6H38v12z"
                  fill="#2563eb"
                />
                <path
                  d="M62 50l14 28H62l-10-20 6-6 4-2z"
                  fill="#1d4ed8"
                />
                <circle cx="75" cy="35" r="5" fill="#3b82f6" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">Rajwardhan</span>
              <span className="brand-subtitle">Full-Stack Developer</span>
            </div>
          </a>

          {/* Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-item-btn ${activeNav === item.label ? "active" : ""}`}
                  onClick={() => setActiveNav(item.label)}
                >
                  {activeNav === item.label && <span className="nav-dot" />}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav Right Actions */}
          <div className="nav-actions">
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              className="download-resume-btn"
              onClick={handleDownloadResume}
              aria-label="Download Resume"
            >
              <span>Download Resume</span>
              <Download size={15} />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Page Container */}
      <main className="container" id="home">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left">
              <div className="status-badge">
                <span className="status-dot" />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="hero-title">
                Hi, I’m
                <span className="highlight-blue">Rajwardhan</span>
                Singh Chawda
              </h1>

              <div className="hero-subtitle">
                Full-Stack Developer | Backend Focus
              </div>

              <p className="hero-bio">
                I build real-world web applications that solve practical problems.
                I enjoy working with Python, Django, Next.js and modern technologies
                to create scalable and impactful solutions.
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <a href="#projects" className="btn-primary" onClick={() => setActiveNav("Projects")}>
                  <span>View My Work</span>
                  <ArrowRight size={17} />
                </a>

                <button className="btn-secondary" onClick={handleDownloadResume}>
                  <Download size={16} />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <button
                  onClick={copyEmail}
                  className="social-icon-btn"
                  aria-label="Copy Email"
                  title={emailCopied ? "Email Copied!" : "Send Email"}
                >
                  {emailCopied ? <Check size={18} color="#10b981" /> : <Mail size={18} />}
                </button>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="WhatsApp Contact"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Center & Right Visual Area */}
            <div className="hero-visual-area">
              {/* Concentric Halo Background Circles */}
              <div className="halo-backdrop" />
              <div className="orbital-ring orbital-ring-1" />
              <div className="orbital-ring orbital-ring-2" />
              <div className="orbital-ring orbital-ring-3" />

              {/* Handwritten Doodle Annotation: Build Learn Improve Repeat */}
              <div className="doodle-annotation-top">
                <div className="doodle-words">
                  <div>Build</div>
                  <div>Learn</div>
                  <div>Improve</div>
                  <div>Repeat</div>
                </div>
                {/* Hand-drawn curved arrow SVG */}
                <svg className="doodle-arrow-svg" viewBox="0 0 60 50" fill="none">
                  <path
                    d="M38 4 C 48 18, 30 32, 14 36"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />
                  <path
                    d="M12 28 L 13 37 L 22 36"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Portrait Center Box */}
              <div className="portrait-container">
                <div className="portrait-img-wrapper">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Rajwardhan Singh Chawda"
                    width={400}
                    height={500}
                    priority
                    className="portrait-img"
                  />
                </div>
              </div>

              {/* Floating Stat Card 1: 6+ Months Experience */}
              <div className="floating-stat-card card-experience">
                <div className="stat-icon-box">
                  <Briefcase size={20} />
                </div>
                <div className="stat-details">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">
                    Months<br />Internship Experience
                  </span>
                </div>
              </div>

              {/* Floating Stat Card 2: 5+ Major Projects */}
              <div className="floating-stat-card card-projects">
                <div className="stat-icon-box">
                  <Code2 size={20} />
                </div>
                <div className="stat-details">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Major Projects</span>
                </div>
              </div>

              {/* Terminal Code Window Mockup */}
              <div className="terminal-window-wrapper">
                <div className="terminal-box">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot dot-red" />
                      <span className="terminal-dot dot-yellow" />
                      <span className="terminal-dot dot-green" />
                    </div>
                    <div className="terminal-title">Currently Working On...</div>
                    <button
                      onClick={copyCodeSnippet}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#9ca3af",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      title="Copy code snippet"
                    >
                      {codeCopied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <div className="terminal-body">
                    <div className="code-line">
                      <span className="line-no">1</span>
                      <span className="code-text">
                        <span className="kw-const">const</span> rajwardhan = {"{"}
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">2</span>
                      <span className="code-text">
                        {"  "}<span className="kw-key">role:</span> <span className="kw-val-str">&quot;Full-Stack Developer&quot;</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">3</span>
                      <span className="code-text">
                        {"  "}<span className="kw-key">skills:</span> [<span className="kw-val-str">&quot;Python&quot;</span>, <span className="kw-val-str">&quot;Django&quot;</span>, <span className="kw-val-str">&quot;Next.js&quot;</span>],
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">4</span>
                      <span className="code-text">
                        {"  "}<span className="kw-key">focus:</span> <span className="kw-val-str">&quot;Building real-world solutions&quot;</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">6</span>
                      <span className="code-text">
                        {"  "}<span className="kw-key">currently:</span> <span className="kw-val-str">&quot;Improving and exploring new</span>
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">7</span>
                      <span className="code-text">
                        {"             "}<span className="kw-val-str">technologies&quot;</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">18</span>
                      <span className="code-text">
                        {"  "}<span className="kw-key">goal:</span> <span className="kw-val-str">&quot;To create impactful products&quot;</span>
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-no">19</span>
                      <span className="code-text">{"}"};</span>
                    </div>
                  </div>
                </div>

                {/* Hand-drawn Quote 2 below terminal */}
                <div className="doodle-quote-bottom">
                  <div className="quote-text">&quot;Turning Ideas into Real Solutions&quot;</div>
                  <svg className="quote-underline-svg" viewBox="0 0 160 14" fill="none">
                    <path
                      d="M4 8 C 45 2, 115 2, 155 7"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 12 C 60 7, 120 7, 145 11"
                      stroke="#3b82f6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK INFO / STATS BANNER */}
        <section className="stats-banner-wrapper">
          <div className="stats-banner">
            {/* Item 1 */}
            <div className="info-item">
              <div className="info-icon-circle">
                <GraduationCap size={22} />
              </div>
              <div className="info-text-group">
                <span className="info-title">B.Tech CSE</span>
                <span className="info-subtitle">PIEMR (2023–2027)</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="info-item">
              <div className="info-icon-circle">
                <MapPin size={22} />
              </div>
              <div className="info-text-group">
                <span className="info-title">Indore,</span>
                <span className="info-subtitle">Madhya Pradesh</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="info-item">
              <div className="info-icon-circle">
                <Briefcase size={22} />
              </div>
              <div className="info-text-group">
                <span className="info-title">Software Engineer Intern</span>
                <span className="info-subtitle">Zangoh (Newzera Tech Labs)</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="info-item">
              <div className="info-icon-circle">
                <Trophy size={22} />
              </div>
              <div className="info-text-group">
                <span className="info-title">Hackathon Winner</span>
                <span className="info-subtitle">CODEपौष 2026 &amp; more</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="info-item">
              <div className="info-icon-circle">
                <Users size={22} />
              </div>
              <div className="info-text-group">
                <span className="info-title">Vice President</span>
                <span className="info-subtitle">DevHub Club, PIEMR</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="featured-section" id="projects">
          <div className="section-header-row">
            <div>
              <div className="section-label-badge">Featured Projects</div>
              <h2 className="section-heading">
                Featured <span className="heading-blue">Projects</span>
              </h2>
              <p className="section-subheading">
                A showcase of my recent work and real-world solutions.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                className={`view-all-btn ${filterTag === "All" ? "active" : ""}`}
                onClick={() => setFilterTag("All")}
              >
                <span>View All Projects</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedProject(project);
                }}
              >
                <div className="project-img-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="project-thumbnail"
                  />
                  <div className="project-overlay" />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-footer">
                    <div className="tags-list">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="card-action-btn" title="View Project Details">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="content-section" id="about">
          <div className="section-label-badge">About Me</div>
          <h2 className="section-heading">
            Engineering Systems with <span className="heading-blue">Impact &amp; Precision</span>
          </h2>
          <p className="section-subheading" style={{ maxWidth: "780px", marginBottom: "32px" }}>
            I am a B.Tech Computer Science student at Prestige Institute of Engineering
            Management &amp; Research (PIEMR), Indore. My passion lies in architecting backend
            services, scalable database models, and building high-performance web products that
            solve day-to-day problems.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div className="skill-category-card">
              <div className="skill-category-title">
                <Cpu size={20} color="#2563eb" />
                <span>Backend Architecture</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Developing robust APIs and microservices using Python, Django REST framework,
                and FastAPI with clean architectural patterns.
              </p>
            </div>

            <div className="skill-category-card">
              <div className="skill-category-title">
                <Layers size={20} color="#2563eb" />
                <span>Full-Stack Integration</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Bridging backend logic with responsive, animated React and Next.js interfaces
                engineered for seamless user experience.
              </p>
            </div>

            <div className="skill-category-card">
              <div className="skill-category-title">
                <Database size={20} color="#2563eb" />
                <span>Database Design</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Optimizing relational schemas (PostgreSQL, MySQL), indexing strategies, and
                caching layers with Redis for high-throughput queries.
              </p>
            </div>

            <div className="skill-category-card">
              <div className="skill-category-title">
                <Users size={20} color="#2563eb" />
                <span>Leadership &amp; Community</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Serving as Vice President of DevHub Club PIEMR, organizing coding workshops,
                mentoring junior developers, and leading hackathon squads.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="content-section" id="experience">
          <div className="section-label-badge">Journey &amp; Roles</div>
          <h2 className="section-heading">
            Experience &amp; <span className="heading-blue">Education</span>
          </h2>
          <p className="section-subheading">
            Practical experience gained through industry internships, leadership, and university studies.
          </p>

          <div className="timeline">
            {/* Experience Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Software Engineer Intern</h3>
                  <span className="timeline-period">2025 - 2026 (6+ Months)</span>
                </div>
                <div className="timeline-company">Zangoh (Newzera Tech Labs) • Indore, MP</div>
                <p className="timeline-desc">
                  Collaborated on enterprise backend services and product development. Authored
                  modular RESTful endpoints in Python, optimized database query execution plans,
                  and integrated testing suites ensuring 99.5% uptime.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Vice President</h3>
                  <span className="timeline-period">2024 - Present</span>
                </div>
                <div className="timeline-company">DevHub Club, PIEMR</div>
                <p className="timeline-desc">
                  Directing developer community initiatives, hosting collegiate hackathons,
                  conducting technical bootcamps on full-stack development and Git workflows,
                  mentoring over 200+ engineering students.
                </p>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">B.Tech in Computer Science &amp; Engineering</h3>
                  <span className="timeline-period">2023 - 2027</span>
                </div>
                <div className="timeline-company">
                  Prestige Institute of Engineering Management &amp; Research (PIEMR), Indore
                </div>
                <p className="timeline-desc">
                  Focusing on Data Structures &amp; Algorithms, Object-Oriented System Design,
                  Database Management Systems, Computer Networks, and Cloud Computing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & HACKATHONS */}
        <section className="content-section" id="achievements">
          <div className="section-label-badge">Recognitions</div>
          <h2 className="section-heading">
            Key <span className="heading-blue">Achievements</span> &amp; Awards
          </h2>
          <p className="section-subheading">
            Milestones and competitive programming competitions won.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            <div className="skill-category-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div className="info-icon-circle">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700 }}>Winner — CODEपौष 2026</h4>
                  <span style={{ fontSize: "12px", color: "var(--accent-blue)", fontWeight: 600 }}>State-level Hackathon</span>
                </div>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Bagged 1st prize for building an automated public governance and complaint
                routing platform under 36 hours.
              </p>
            </div>

            <div className="skill-category-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div className="info-icon-circle">
                  <Flame size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700 }}>Winner — TechXcelerate 2K26</h4>
                  <span style={{ fontSize: "12px", color: "var(--accent-blue)", fontWeight: 600 }}>Healthcare AI Track</span>
                </div>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Honored for the AI-Powered Emergency Triage &amp; Hospital Routing prototype,
                judged by hospital directors and industry tech architects.
              </p>
            </div>

            <div className="skill-category-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div className="info-icon-circle">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700 }}>5+ Major Production Projects</h4>
                  <span style={{ fontSize: "12px", color: "var(--accent-blue)", fontWeight: 600 }}>Real-world Impact</span>
                </div>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Built and deployed active web systems for district healthcare queues, wildlife
                monitoring, and student club platforms.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="content-section" id="skills">
          <div className="section-label-badge">Technical Stack</div>
          <h2 className="section-heading">
            Skills &amp; <span className="heading-blue">Technologies</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I use to build scalable products.
          </p>

          <div className="skills-grid">
            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Cpu size={18} color="#2563eb" />
                Backend
              </h3>
              <div className="skill-tags">
                <span className="skill-pill">Python</span>
                <span className="skill-pill">Django</span>
                <span className="skill-pill">Django REST</span>
                <span className="skill-pill">FastAPI</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">REST APIs</span>
              </div>
            </div>

            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Layers size={18} color="#2563eb" />
                Frontend
              </h3>
              <div className="skill-tags">
                <span className="skill-pill">Next.js</span>
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">HTML5 / CSS3</span>
                <span className="skill-pill">Bootstrap</span>
              </div>
            </div>

            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Database size={18} color="#2563eb" />
                Databases &amp; Cloud
              </h3>
              <div className="skill-tags">
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">PostgreSQL</span>
                <span className="skill-pill">Redis</span>
                <span className="skill-pill">Neon DB</span>
                <span className="skill-pill">Firebase</span>
                <span className="skill-pill">Supabase</span>
              </div>
            </div>

            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Wrench size={18} color="#2563eb" />
                Tools &amp; Geospatial
              </h3>
              <div className="skill-tags">
                <span className="skill-pill">Git &amp; GitHub</span>
                <span className="skill-pill">Docker</span>
                <span className="skill-pill">Geospatial GIS</span>
                <span className="skill-pill">AI / ML APIs</span>
                <span className="skill-pill">Postman</span>
                <span className="skill-pill">Linux</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="content-section" id="contact">
          <div className="section-label-badge">Get in Touch</div>
          <h2 className="section-heading">
            Let’s Build Something <span className="heading-blue">Remarkable</span>
          </h2>
          <p className="section-subheading">
            I’m always open to discussing new projects, internship opportunities, or tech collabs.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "36px",
              marginTop: "32px",
            }}
          >
            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="skill-category-card">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div className="info-icon-circle">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>Email</span>
                    <span style={{ fontSize: "15px", fontWeight: 700 }}>rajwardhan.chawda@example.com</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div className="info-icon-circle">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>Location</span>
                    <span style={{ fontSize: "15px", fontWeight: 700 }}>Indore, Madhya Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div className="info-icon-circle">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>Direct WhatsApp</span>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: "15px", fontWeight: 700, color: "var(--accent-blue)", textDecoration: "none" }}
                    >
                      +91 (Direct Chat Link) &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleContactSubmit}
              className="skill-category-card"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <h3 style={{ fontSize: "17px", fontWeight: 700 }}>Send a Message</h3>

              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea or opportunity..."
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {contactSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="logo-badge" style={{ width: "32px", height: "32px" }}>
              <span style={{ fontSize: "16px", fontWeight: 800, color: "var(--accent-blue)" }}>RC</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>Rajwardhan Singh Chawda</span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>Full-Stack Developer</span>
            </div>
          </div>

          <div className="footer-copy">
            &copy; 2026 Rajwardhan Singh Chawda. Built with Next.js.
          </div>

          <div className="social-links" style={{ margin: 0 }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <GithubIcon size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="social-icon-btn">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div style={{ position: "relative", width: "100%", height: "280px" }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "28px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "10px" }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                {selectedProject.details.overview}
              </p>

              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>
                Key Technical Highlights:
              </h3>
              <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {selectedProject.details.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                {selectedProject.details.live && (
                  <a
                    href={selectedProject.details.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {selectedProject.details.github && (
                  <a
                    href={selectedProject.details.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
