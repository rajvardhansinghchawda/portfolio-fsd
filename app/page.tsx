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
  Phone,
  MapPin,
  User,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Check,
  Send,
  Award,
  Star,
  Layers,
  ArrowLeft,
  Activity,
  Users as UsersIcon,
} from "lucide-react";

import {
  PythonIcon,
  JavaIcon,
  CppIcon,
  DjangoIcon,
  FastApiIcon,
  ReactIcon,
  NextjsIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  SqlIcon,
  MysqlIcon,
  MongoDbIcon,
  GitIcon,
  GithubBrandIcon,
  DockerIcon,
  PostmanIcon,
  LinuxIcon,
  VsCodeIcon,
  AwsIcon,
} from "./components/TechIcons";

// Social SVG Icons
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

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

// Golden 3D Trophy Component matching reference Screen 7
function TrophyGoldIcon({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M14 6H34V20C34 25.5 29.5 30 24 30C18.5 30 14 25.5 14 20V6Z" fill="#F59E0B" />
      <path d="M14 10H8C6.9 10 6 10.9 6 12C6 16.4 9.6 20 14 20V10Z" fill="#FBBF24" />
      <path d="M34 10H40C41.1 10 42 10.9 42 12C42 16.4 38.4 20 34 20V10Z" fill="#FBBF24" />
      <path d="M21 30H27V38H21V30Z" fill="#D97706" />
      <rect x="15" y="38" width="18" height="5" rx="2" fill="#B45309" />
      <path d="M17 10H31V18C31 21.3 28.3 24 25 24C21.7 24 19 21.3 19 18V10Z" fill="#FDE68A" opacity="0.65" />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  allTags?: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  details: {
    overview: string;
    features: string[];
  };
}

const projectsData: Project[] = [
  {
    id: "hospital-queue",
    title: "Smart District Hospital Queue & Appointment System",
    description:
      "Online appointment booking, digital token generation, live queue tracking, doctor dashboard and admin console.",
    image: "/images/project_hospital.png",
    tags: ["Django", "MySQL", "React"],
    allTags: ["Django", "Django REST", "MySQL", "React", "Bootstrap"],
    category: "Full-Stack",
    liveUrl: "https://hospital-queue-demo.web.app",
    githubUrl: "https://github.com/rajwardhan/smart-district-hospital",
    details: {
      overview:
        "A complete hospital management solution to reduce crowding and improve patient experience through online appointments, digital tokens and real-time queue tracking.",
      features: [
        "Online appointment booking",
        "Digital token generation",
        "Live queue tracking with ETA",
        "Doctor dashboard",
        "Admin console",
        "Supports up to 1,000 concurrent users",
      ],
    },
  },
  {
    id: "wildlife-habitat",
    title: "Wildlife Habitat Monitoring System",
    description:
      "Platform to identify changes in wildlife habitats using satellite and environmental data.",
    image: "/images/project_wildlife.png",
    tags: ["Python", "Geospatial", "API"],
    allTags: ["Python", "Geospatial", "Sentinel-2 API", "FastAPI", "Leaflet"],
    category: "AI & Geospatial",
    liveUrl: "https://wildlife-monitor.example.com",
    githubUrl: "https://github.com/rajwardhan/wildlife-habitat-monitor",
    details: {
      overview:
        "Platform to identify changes in wildlife habitats using satellite imagery and environmental data streams to protect biodiversity and natural reserves.",
      features: [
        "Multispectral satellite image processing",
        "Normalized Difference Vegetation Index (NDVI) mapping",
        "Automated habitat disturbance alerts",
        "Interactive GIS boundary polygon analysis",
        "Telemetry data aggregation with time-series charts",
        "High-performance spatial querying backend",
      ],
    },
  },
  {
    id: "emergency-triage",
    title: "AI-Powered Emergency Triage & Hospital Routing",
    description:
      "AI-based triage and routing system for emergencies. TechXcelerate 2K26 Winner.",
    image: "/images/project_triage.png",
    tags: ["Next.js", "FastAPI", "AI"],
    allTags: ["Next.js", "FastAPI", "AI", "Python", "Google Maps API"],
    category: "AI & Healthcare",
    liveUrl: "https://emergency-triage-ai.vercel.app",
    githubUrl: "https://github.com/rajwardhan/ai-emergency-triage",
    details: {
      overview:
        "Emergency dispatch decision engine designed to route critical ambulances to hospitals with available trauma ICU beds based on AI symptom triage and live traffic congestion.",
      features: [
        "Sub-2-second AI triage and trauma score assessment",
        "Real-time ICU and ventilator bed tracker",
        "Optimal hospital routing factoring in live traffic",
        "Emergency operator dispatcher interface",
        "Audible priority alerts for Code Red emergencies",
        "TechXcelerate 2K26 First Prize Hackathon Winner",
      ],
    },
  },
];

interface TechSkill {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools & Others";
  icon: React.ComponentType<{ size?: number }>;
}

const techSkills: TechSkill[] = [
  { name: "Python", category: "Languages", icon: PythonIcon },
  { name: "Java", category: "Languages", icon: JavaIcon },
  { name: "C / C++", category: "Languages", icon: CppIcon },
  { name: "Django", category: "Backend", icon: DjangoIcon },
  { name: "FastAPI", category: "Backend", icon: FastApiIcon },
  { name: "React", category: "Frontend", icon: ReactIcon },
  { name: "Next.js", category: "Frontend", icon: NextjsIcon },
  { name: "HTML", category: "Frontend", icon: HtmlIcon },
  { name: "CSS", category: "Frontend", icon: CssIcon },
  { name: "JavaScript", category: "Languages", icon: JavascriptIcon },
  { name: "SQL", category: "Database", icon: SqlIcon },
  { name: "MySQL", category: "Database", icon: MysqlIcon },
  { name: "MongoDB", category: "Database", icon: MongoDbIcon },
  { name: "Git", category: "Tools & Others", icon: GitIcon },
  { name: "GitHub", category: "Tools & Others", icon: GithubBrandIcon },
  { name: "Docker", category: "Tools & Others", icon: DockerIcon },
  { name: "Postman", category: "Tools & Others", icon: PostmanIcon },
  { name: "Linux", category: "Tools & Others", icon: LinuxIcon },
  { name: "VS Code", category: "Tools & Others", icon: VsCodeIcon },
  { name: "AWS", category: "Tools & Others", icon: AwsIcon },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeNav, setActiveNav] = useState("Home");
  const [skillFilter, setSkillFilter] = useState<string>("All");
  const [showcaseProject, setShowcaseProject] = useState<Project | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Track active section on scroll with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "experience", "achievements", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            const labelMap: Record<string, string> = {
              home: "Home",
              about: "About",
              projects: "Projects",
              experience: "Experience",
              achievements: "Achievements",
              contact: "Contact",
            };
            setActiveNav(labelMap[id] || "Home");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
    { label: "Contact", href: "#contact" },
  ];

  const filteredSkills =
    skillFilter === "All"
      ? techSkills
      : techSkills.filter(
          (s) =>
            s.category === skillFilter ||
            (skillFilter === "Frontend" && s.name === "JavaScript") ||
            (skillFilter === "Backend" && (s.name === "Python" || s.name === "Java"))
        );

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
              <span>RC</span>
            </div>
            <span className="brand-name">Rajwardhan</span>
          </a>

          {/* Navigation Links with sleek bottom underline indicator */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-item-btn ${activeNav === item.label ? "active" : ""}`}
                  onClick={() => setActiveNav(item.label)}
                >
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
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Sections */}
      <main className="container">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION                                                   */}
        {/* ========================================================================= */}
        <section className="hero-section" id="home">
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-left">
              <div className="status-badge">
                <span className="status-dot" />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="hero-title">
                Hi, I’m
                <span className="highlight-blue" style={{ display: "block" }}>
                  Rajwardhan
                </span>
                Singh Chawda
              </h1>

              <div className="hero-subtitle">
                Full-Stack Developer | Backend Focus
              </div>

              <p className="hero-bio">
                I build real-world web applications that solve practical problems.
                I love working with Python, Django, Next.js and modern technologies
                to create scalable and impactful solutions.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <a href="#projects" className="btn-primary" onClick={() => setActiveNav("Projects")}>
                  <span>View My Work</span>
                  <ArrowRight size={17} />
                </a>

                <button className="btn-secondary" onClick={handleDownloadResume}>
                  <span>Download Resume</span>
                  <Download size={16} />
                </button>
              </div>

              {/* Social Icons */}
              <div className="social-links">
                <a
                  href="https://github.com/rajwardhan-chawda"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/rajwardhan-chawda"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter Profile"
                  title="Twitter / X"
                >
                  <TwitterIcon size={18} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="WhatsApp Contact"
                  title="Chat on WhatsApp"
                >
                  <WhatsappIcon size={18} />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with natural cutout and original doodle */}
            <div className="hero-visual-area">
              <div className="hero-glow-backdrop" />
              <div className="hero-portrait-frame">
                <Image
                  src="/images/portrait_hero.png"
                  alt="Rajwardhan Singh Chawda"
                  width={380}
                  height={500}
                  priority
                  className="hero-portrait-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: ABOUT ME                                                       */}
        {/* ========================================================================= */}
        <section className="about-section" id="about">
          <div className="section-pill">About Me</div>
          <div className="about-grid">
            {/* Left Column: Text and 2x2 Info Cards */}
            <div>
              <h2 className="section-title">
                Building Real Solutions with Code
              </h2>
              <p className="about-bio-text">
                I&apos;m Rajwardhan Singh Chawda, a Computer Science student at PIEMR with a passion
                for full-stack development and problem solving. I enjoy working on backend systems,
                APIs and modern web applications. I&apos;m always eager to learn new technologies and
                contribute to impactful projects.
              </p>

              {/* 2x2 Info Cards Grid */}
              <div className="about-info-grid">
                {/* Card 1: Name */}
                <div className="about-info-card">
                  <div className="about-info-icon">
                    <User size={19} />
                  </div>
                  <div>
                    <div className="about-info-label">Name</div>
                    <div className="about-info-val">Rajwardhan Singh Chawda</div>
                  </div>
                </div>

                {/* Card 2: Education */}
                <div className="about-info-card">
                  <div className="about-info-icon">
                    <GraduationCap size={19} />
                  </div>
                  <div>
                    <div className="about-info-label">Education</div>
                    <div className="about-info-val">B.Tech CSE, PIEMR (2023-2027)</div>
                  </div>
                </div>

                {/* Card 3: Location */}
                <div className="about-info-card">
                  <div className="about-info-icon">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <div className="about-info-label">Location</div>
                    <div className="about-info-val">Indore, Madhya Pradesh</div>
                  </div>
                </div>

                {/* Card 4: Focus */}
                <div className="about-info-card">
                  <div className="about-info-icon">
                    <Layers size={19} />
                  </div>
                  <div>
                    <div className="about-info-label">Focus</div>
                    <div className="about-info-val">Backend Development &amp; System Design</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Angled Polaroid photo + handwritten doodle */}
            <div className="about-photo-wrapper">
              <div className="about-photo-polaroid">
                <Image
                  src="/images/portrait_about.png"
                  alt="Rajwardhan Singh Chawda"
                  width={340}
                  height={380}
                  className="about-polaroid-img"
                />
              </div>
              <div className="about-doodle-text">
                <span>A better version everyday !</span>
                <svg width="34" height="18" viewBox="0 0 60 24" fill="none">
                  <path
                    d="M4 14 C 20 6, 40 6, 56 16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M44 18 L 56 16 L 50 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SKILLS & TECHNOLOGIES                                          */}
        {/* ========================================================================= */}
        <section className="skills-section" id="skills">
          <div className="section-pill">Tech Stack</div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with and continuously improve.
          </p>

          {/* Filter Pills */}
          <div className="skills-filter-row">
            {["All", "Languages", "Frontend", "Backend", "Database", "Tools & Others"].map(
              (category) => (
                <button
                  key={category}
                  className={`skills-filter-btn ${skillFilter === category ? "active" : ""}`}
                  onClick={() => setSkillFilter(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* 20 Skill Cards Grid */}
          <div className="tech-cards-grid">
            {filteredSkills.map((skill) => {
              const IconComp = skill.icon;
              return (
                <div key={skill.name} className="tech-skill-card">
                  <div className="tech-icon-wrapper">
                    <IconComp size={38} />
                  </div>
                  <span className="tech-skill-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 & 5: FEATURED PROJECTS & PROJECT SHOWCASE VIEW                 */}
        {/* ========================================================================= */}
        <section className="featured-section" id="projects">
          <div className="section-header-row">
            <div>
              <div className="section-pill">Featured Projects</div>
              <h2 className="section-title">Some of My Best Work</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                A showcase of my recent projects and real-world solutions.
              </p>
            </div>

            <button
              className="view-all-btn"
              onClick={() => {
                if (showcaseProject) {
                  setShowcaseProject(null);
                } else {
                  setShowcaseProject(projectsData[0]);
                }
              }}
            >
              <span>{showcaseProject ? "Show All Projects" : "View All Projects"}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* If Showcase View is Active (Screen 5 replica) */}
          {showcaseProject ? (
            <div className="project-showcase-container">
              {/* Back to Projects button */}
              <button
                className="back-to-projects-btn"
                onClick={() => setShowcaseProject(null)}
              >
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              {/* Title & Action Buttons Row */}
              <div className="showcase-header-row">
                <h3 className="showcase-title">{showcaseProject.title}</h3>
                <div className="showcase-action-btns">
                  <a
                    href={showcaseProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-showcase-demo"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                  <a
                    href={showcaseProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-showcase-github"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Tags Row */}
              <div className="showcase-tags-row">
                {(showcaseProject.allTags || showcaseProject.tags).map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2-Column Split: Hospital Dashboard on Left + Details on Right */}
              <div className="showcase-2col-layout">
                {/* Left: Authentic Light-Themed Dashboard Preview */}
                <div className="showcase-dashboard-frame">
                  <Image
                    src="/images/hospital_dashboard_full.png"
                    alt={showcaseProject.title}
                    width={700}
                    height={420}
                    className="showcase-dashboard-img"
                  />
                </div>

                {/* Right: Overview & Key Features Checklist */}
                <div className="showcase-info-col">
                  <h4 className="showcase-block-title">Project Overview</h4>
                  <p className="showcase-overview-text">
                    {showcaseProject.details.overview}
                  </p>

                  <h4 className="showcase-block-title">Key Features</h4>
                  <ul className="showcase-features-list">
                    {showcaseProject.details.features.map((feature, idx) => (
                      <li key={idx} className="showcase-feature-item">
                        <CheckCircle2 size={18} className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            /* 3 Project Cards Grid (Screen 4 replica) */
            <div className="projects-grid">
              {projectsData.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => setShowcaseProject(project)}
                >
                  <div className="project-img-container">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={220}
                      className="project-thumbnail"
                    />
                  </div>

                  <div className="project-content">
                    {/* Tags */}
                    <div className="tags-list">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Action buttons */}
                    <div className="project-card-btn-group" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-demo-link"
                      >
                        <span>Live Demo</span>
                        <ArrowRight size={13} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-github-link"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WORK EXPERIENCE                                                */}
        {/* ========================================================================= */}
        <section className="experience-section" id="experience">
          <div className="section-pill">Work Experience</div>
          <h2 className="section-title">My Experience</h2>
          <p className="section-subtitle">
            My professional journey and key contributions.
          </p>

          <div className="experience-timeline-container">
            {/* Left Date Column */}
            <div className="experience-date-col">
              <div className="experience-period-text">Jun 2026 - Present</div>
              <div className="experience-duration-text">(6 Months)</div>
            </div>

            {/* Middle Timeline Line & Node */}
            <div className="experience-line-col">
              <div className="experience-node-dot" />
              <div className="experience-track-line" />
            </div>

            {/* Right Card Column */}
            <div className="experience-card-col">
              <div className="experience-detail-card">
                <h3 className="experience-role-title">Software Engineer Intern - Full Stack</h3>
                <a
                  href="https://zangoh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="experience-company-title"
                >
                  Zangoh (Newzera Tech Labs Pvt. Ltd.)
                </a>

                <ul className="experience-bullet-list">
                  <li className="experience-bullet-item">
                    Worked on Nexus platform using Next.js and modern web technologies.
                  </li>
                  <li className="experience-bullet-item">
                    Implemented features like tender chatbot, document generation and dashboard modules.
                  </li>
                  <li className="experience-bullet-item">
                    Collaborated with the team using agile workflow and contributed to multiple sprints.
                  </li>
                  <li className="experience-bullet-item">
                    Worked on responsive UI, API integration and frontend improvements.
                  </li>
                </ul>

                {/* Tech tags */}
                <div className="experience-tech-tags">
                  {["Next.js", "React", "FastAPI", "Docker", "Git", "Agile"].map((tech) => (
                    <span key={tech} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: ACHIEVEMENTS & RECOGNITIONS                                    */}
        {/* ========================================================================= */}
        <section className="achievements-section" id="achievements">
          <div className="section-pill">Achievements</div>
          <h2 className="section-title">Awards &amp; Recognitions</h2>
          <p className="section-subtitle">
            Some of my key achievements and milestones.
          </p>

          {/* Top 4 Cards with Golden Trophies */}
          <div className="achievements-top-grid">
            {/* Card 1 */}
            <div className="achievement-card">
              <div className="achievement-trophy-box">
                <TrophyGoldIcon size={42} />
              </div>
              <div className="achievement-rank">Second Prize</div>
              <div className="achievement-event-title">CODEकीर्ति 2026</div>
              <div className="achievement-detail-text">
                Wildlife Habitat Monitoring System (Sustainability Theme)
              </div>
              <div className="achievement-date">Sept 2026</div>
            </div>

            {/* Card 2 */}
            <div className="achievement-card">
              <div className="achievement-trophy-box">
                <TrophyGoldIcon size={42} />
              </div>
              <div className="achievement-rank">First Prize</div>
              <div className="achievement-event-title">TechXcelerate 2K26</div>
              <div className="achievement-detail-text">
                AI-Powered Emergency Triage &amp; Hospital Routing System
              </div>
              <div className="achievement-date">May 2026</div>
            </div>

            {/* Card 3 */}
            <div className="achievement-card">
              <div className="achievement-trophy-box">
                <TrophyGoldIcon size={42} />
              </div>
              <div className="achievement-rank">Top 8</div>
              <div className="achievement-event-title">BGI Hackathon</div>
              <div className="achievement-detail-text">
                Among top 8 teams in BGI Hackathon
              </div>
              <div className="achievement-date">May 2026</div>
            </div>

            {/* Card 4 */}
            <div className="achievement-card">
              <div className="achievement-trophy-box">
                <TrophyGoldIcon size={42} />
              </div>
              <div className="achievement-rank">First Prize</div>
              <div className="achievement-event-title">Project Exhibition</div>
              <div className="achievement-detail-text">
                Project exhibition winner at PIEMR
              </div>
              <div className="achievement-date">May 2026</div>
            </div>
          </div>

          {/* Bottom 3 Cards */}
          <div className="achievements-bottom-grid">
            <div className="achievement-horizontal-card">
              <div className="achievement-badge-icon">
                <Activity size={22} />
              </div>
              <div>
                <div className="achievement-badge-title">Vice President</div>
                <div className="achievement-badge-desc">DevHub Club PIEMR</div>
              </div>
            </div>

            <div className="achievement-horizontal-card">
              <div className="achievement-badge-icon">
                <UsersIcon size={22} />
              </div>
              <div>
                <div className="achievement-badge-title">SIH 2026</div>
                <div className="achievement-badge-desc">Internal Round (Top 1) Microplastic Detector (Hardware)</div>
              </div>
            </div>

            <div className="achievement-horizontal-card">
              <div className="achievement-badge-icon">
                <Star size={22} />
              </div>
              <div>
                <div className="achievement-badge-title">Multiple Hackathons</div>
                <div className="achievement-badge-desc">Unjustav, Ideathon, HackXcelerate and more</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: EDUCATION & TIMELINE                                           */}
        {/* ========================================================================= */}
        <section className="education-section">
          <div className="section-pill">Education &amp; Journey</div>
          <h2 className="section-title">Education &amp; Timeline</h2>
          <p className="section-subtitle">
            My academic journey and important milestones.
          </p>

          <div className="edu-timeline-wrapper">
            {/* Timeline Item 1 */}
            <div className="edu-timeline-item">
              <div className="edu-timeline-dot-col">
                <div className="edu-timeline-node" />
                <div className="edu-timeline-line" />
              </div>
              <div className="edu-timeline-year">2023 - 2027</div>
              <div className="edu-circle-badge edu-circle-blue">
                <GraduationCap size={22} />
              </div>
              <div className="edu-content-col">
                <h3 className="edu-card-title">B.Tech in Computer Science &amp; Engineering</h3>
                <div className="edu-card-subtitle">
                  Prestige Institute of Engineering Management &amp; Research (PIEMR)
                </div>
                <div className="edu-card-desc">CGPA: -</div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="edu-timeline-item">
              <div className="edu-timeline-dot-col">
                <div className="edu-timeline-node" />
                <div className="edu-timeline-line" />
              </div>
              <div className="edu-timeline-year">2026</div>
              <div className="edu-circle-badge edu-circle-blue">
                <Briefcase size={22} />
              </div>
              <div className="edu-content-col">
                <h3 className="edu-card-title">Full-Stack Intern</h3>
                <div className="edu-card-subtitle">Zangoh (Newzera Tech Labs)</div>
                <div className="edu-card-desc">
                  Working on real-world web applications using Next.js, FastAPI and modern tools.
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="edu-timeline-item">
              <div className="edu-timeline-dot-col">
                <div className="edu-timeline-node" />
                <div className="edu-timeline-line" />
              </div>
              <div className="edu-timeline-year">2026</div>
              <div className="edu-circle-badge edu-circle-orange">
                <TrophyGoldIcon size={26} />
              </div>
              <div className="edu-content-col">
                <h3 className="edu-card-title">CODEकीर्ति 2026</h3>
                <div className="edu-card-subtitle">Second Prize - Wildlife Habitat Monitoring System</div>
                <div className="edu-card-desc">Sustainability Theme</div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="edu-timeline-item">
              <div className="edu-timeline-dot-col">
                <div className="edu-timeline-node" />
              </div>
              <div className="edu-timeline-year">2026</div>
              <div className="edu-circle-badge edu-circle-gold">
                <TrophyGoldIcon size={26} />
              </div>
              <div className="edu-content-col">
                <h3 className="edu-card-title">TechXcelerate 2K26</h3>
                <div className="edu-card-subtitle">
                  First Prize - AI-Powered Emergency Triage &amp; Hospital Routing System
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: GET IN TOUCH / CONTACT                                         */}
        {/* ========================================================================= */}
        <section className="contact-section" id="contact">
          <div className="section-pill">Get in Touch</div>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            I&apos;m always open to discussing new opportunities, interesting projects or just talking about technology.
          </p>

          <div className="contact-2col-grid">
            {/* Left Column: Clean list with circular icons */}
            <div className="contact-info-list">
              {/* Email */}
              <a href="mailto:rajwardhan.chawda@example.com" className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Mail size={19} />
                </div>
                <div>
                  <div className="contact-info-title">Email</div>
                  <div className="contact-info-val">rajwardhan.chawda@example.com</div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919876543210" className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Phone size={19} />
                </div>
                <div>
                  <div className="contact-info-title">Phone</div>
                  <div className="contact-info-val">+91 98765 43210</div>
                </div>
              </a>

              {/* Location */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <MapPin size={19} />
                </div>
                <div>
                  <div className="contact-info-title">Location</div>
                  <div className="contact-info-val">Indore, Madhya Pradesh</div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rajwardhan-chawda"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >
                <div className="contact-info-icon-box">
                  <LinkedinIcon size={19} />
                </div>
                <div>
                  <div className="contact-info-title">LinkedIn</div>
                  <div className="contact-info-val">linkedin.com/in/rajwardhan-chawda</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rajwardhan-chawda"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >
                <div className="contact-info-icon-box">
                  <GithubIcon size={19} />
                </div>
                <div>
                  <div className="contact-info-title">GitHub</div>
                  <div className="contact-info-val">github.com/rajwardhan-chawda</div>
                </div>
              </a>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleContactSubmit}>
                <div className="contact-inputs-row">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-input-field"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input-field"
                  />
                </div>

                <textarea
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="contact-textarea-field"
                />

                <button type="submit" className="btn-contact-send">
                  {contactSubmitted ? (
                    <>
                      <Check size={18} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="logo-badge" style={{ width: "32px", height: "32px" }}>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--accent-blue)" }}>RC</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>Rajwardhan Singh Chawda</span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>
                Full-Stack Developer | Backend Focus
              </span>
            </div>
          </div>

          <div className="footer-copy">
            &copy; 2026 Rajwardhan Singh Chawda. All rights reserved.
          </div>

          <div className="social-links" style={{ margin: 0 }}>
            <a href="https://github.com/rajwardhan-chawda" target="_blank" rel="noreferrer" className="social-icon-btn">
              <GithubIcon size={16} />
            </a>
            <a href="https://linkedin.com/in/rajwardhan-chawda" target="_blank" rel="noreferrer" className="social-icon-btn">
              <LinkedinIcon size={16} />
            </a>
            <a href="mailto:rajwardhan.chawda@example.com" className="social-icon-btn">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
