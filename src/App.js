import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';

const sections = [
  'home',
  'about',
  'experience',
  'skills',
  'projects',
  'research',
  'certifications',
  'contact',
];

const skillCategories = [
  {
    title: 'Languages',
    accent: '01',
    icon: '</>',
    items: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    accent: '02',
    icon: 'UI',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    accent: '03',
    icon: 'API',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases',
    accent: '04',
    icon: 'DB',
    items: ['MongoDB Atlas', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    accent: '05',
    icon: 'CLD',
    items: [
      'AWS',
      'Docker',
      'Jenkins',
      'Git',
      'GitHub',
      'Hyper-V',
      'IIS',
    ],
  },
  {
    title: 'AI & Tools',
    accent: '06',
    icon: 'AI',
    items: ['Google ADK', 'OpenCV', 'MediaPipe', 'TensorFlow Lite', 'VS Code', 'Postman', 'Figma'],
  },
];

const projects = [
  {
    title: 'HabitFlow',
    description:
      'A full-stack habit tracking application with authentication, progress tracking, analytics and a responsive interface.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Tailwind CSS'],
    status: 'Completed',
    links: [
      { label: 'Live Demo', href: 'https://habit-tracker-gamma-gray.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Varshashoban/habit-tracker.git' },
    ],
  },
  {
    title: 'SyncStep',
    description:
      'An AI-powered human movement analysis and coaching system using computer vision and pose estimation.',
    tech: ['Python', 'Flask', 'OpenCV', 'MoveNet', 'MediaPipe', 'TensorFlow Lite'],
    status: 'Completed',
    links: [{ label: 'GitHub Coming Soon' }],
  },
  {
    title: 'Sea Level Rise Dashboard',
    description:
      'An interactive environmental dashboard visualizing sea-level rise using map-based visualizations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'],
    status: 'Completed',
    links: [{ label: 'GitHub', href: 'https://github.com/harini777/sea-level-rise-dashboard.git' }],
  },
];

const highlights = [
  'Full-stack development',
  'Cloud infrastructure',
  'AI-focused learning',
];

const experienceSkills = [
  'Java Spring Boot',
  'ASP.NET (ASPX)',
  'IIS Website Hosting',
  'Hyper-V Virtualization',
  'Networking Fundamentals',
  'Cloud Computing Fundamentals',
  'Artificial Intelligence Fundamentals',
  'Google ADK (Offline AI Agent Development)',
];

const researchPapers = [
  {
    title:
      'A Cognitive Wireless Framework for Intelligent Queue Management and Priority Dissemination in Public Service Infrastructures Using nRF24L01 Transceivers',
    status: 'Under Review',
    description:
      'Proposes an intelligent wireless framework using nRF24L01 transceivers to improve queue management and priority dissemination in public service environments through efficient embedded communication.',
  },
  {
    title:
      'Traffic Engineering and Load Balancing in Software Defined Networks Using Ant Colony Optimization',
    status: 'Under Review',
    description:
      'Research exploring intelligent traffic engineering and network optimization in Software Defined Networks using Ant Colony Optimization.',
  },
  {
    title:
      'A Privacy–Complexity Framework for Classifying Graph Algorithms in Edge Computing',
    status: 'Under Review',
    description:
      'Introduces a Privacy–Complexity (PC) Framework for evaluating graph algorithms based on computational efficiency and privacy risk in edge computing environments, enabling privacy-aware algorithm selection for decentralized systems.',
  },
];

const certifications = [
  {
    title: 'Exploring Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
  },
  {
    title: 'Agile Scrum in Practice',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'Software Engineering and Agile Software Development',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'DevOps Practitioner - Agility Delivered Approach',
    issuer: 'VIT Chennai',
  },
  {
    title: 'Operating System Fundamentals',
    issuer: 'Scaler Topics',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.7],
        rootMargin: '-20% 0px -35% 0px',
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="page-orb page-orb--one" />
      <div className="page-orb page-orb--two" />
      <div className="page-grid" />

      <Navbar activeSection={activeSection} />

      <main>
        <section className="hero section" id="home">
          <div className="container hero__layout">
            <div className="hero__backdrop-text" aria-hidden="true">
              Portfolio
            </div>
            <div className="hero__content reveal">
              <div className="hero__badge">
                Available for internships and placements
              </div>
              <h1 className="hero__name">S Varsha</h1>
              <h2 className="hero__title">
                Computer Science Student | Full-Stack Developer | Cloud & AI Enthusiast
              </h2>
              <p className="hero__headline">
                Building practical software across full-stack development, cloud computing, and AI.
              </p>
              <p className="hero__tagline">
                I enjoy turning ideas into clean, useful applications while learning
                deeply through projects, research, and real-world technical exposure.
              </p>
              <p className="hero__subtagline">
                Focused on internship opportunities where software engineering,
                infrastructure, and applied AI come together.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  View Projects
                </a>
                <a className="button button--ghost" href="#contact">
                  Contact Me
                </a>
              </div>
              <div className="hero__highlights">
                {highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="hero__panel reveal">
              <div className="hero-visual surface-card">
                <div className="hero-visual__top">
                  <span className="hero-card__label">Education</span>
                  <h3>B.Tech Computer Science and Engineering</h3>
                  <p>VIT Chennai</p>
                </div>

                <div className="hero-visual__grid">
                  <div className="hero-visual__item">
                    <strong>Experience</strong>
                    <span>AI Infrastructure Intern, Sonata Software</span>
                  </div>
                  <div className="hero-visual__item">
                    <strong>Focus</strong>
                    <span>Full-Stack Development, Cloud Computing, Artificial Intelligence</span>
                  </div>
                  <div className="hero-visual__item">
                    <strong>Goal</strong>
                    <span>Software Engineering Internships, Research and Practical Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Turning ideas into real, working systems.</span>
        </div>

        <section className="section" id="about">
          <div className="container">
            <SectionTitle
              eyebrow="About"
              title="Curious, practical, and focused on building useful software."
            />
            <div className="about-layout reveal">
              <div className="about-card surface-card">
                <div className="about-tags">
                  <span className="badge">Full-stack focused</span>
                  <span className="badge">Research-minded</span>
                  <span className="badge">Consistent learner</span>
                </div>
                <p className="about-card__lead">
                  I am a B.Tech Computer Science and Engineering student at VIT Chennai.
                </p>
                <p>
                  I am passionate about Full-Stack Development, Cloud Computing,
                  and Artificial Intelligence, with a strong interest in research.
                </p>
                <p>
                  I enjoy building practical software, learning constantly, and
                  applying technical ideas to meaningful development problems.
                </p>
                <p>
                  I am looking for internship opportunities where I can contribute,
                  grow, and work on real software systems.
                </p>
              </div>

              <div className="about-visual surface-card">
                <div className="about-visual__header">
                  <span className="about-visual__eyebrow">What drives my work</span>
                  <h3>Practical learning with research curiosity.</h3>
                </div>
                <div className="about-visual__metric">
                  <strong>Build</strong>
                  <span>Creating applications that solve clear problems with usable, maintainable interfaces.</span>
                </div>
                <div className="about-visual__metric">
                  <strong>Explore</strong>
                  <span>Studying cloud platforms, AI tools, and research-led approaches to engineering.</span>
                </div>
                <div className="about-visual__metric">
                  <strong>Grow</strong>
                  <span>Learning continuously through internships, projects, certifications, and practice.</span>
                </div>
                <div className="about-visual__ribbon">VIT Chennai | CSE</div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Clean code. Clear thinking. Real impact.</span>
        </div>

        <section className="section" id="experience">
          <div className="container">
            <SectionTitle
              eyebrow="Experience"
              title="Hands-on exposure to enterprise software, cloud, and AI infrastructure."
            />
            <div className="experience-grid">
              <article className="surface-card project-card experience-card reveal">
                <div className="project-card__meta">
                  <span className="project-card__index">01</span>
                  <span className="project-card__type">Experience</span>
                </div>
                <h3>AI Infrastructure Intern</h3>
                <p className="experience-card__company">Sonata Software</p>
                <p>
                  Completed an AI Infrastructure internship where I gained hands-on
                  exposure to enterprise software development, backend technologies,
                  cloud infrastructure and virtualization.
                </p>
                <div className="badge-list">
                  {experienceSkills.map((item) => (
                    <span className="badge badge--accent" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Skills shaped by practice and curiosity.</span>
        </div>

        <section className="section section--muted" id="skills">
          <div className="container">
            <div className="section-intro">
              <p className="section-intro__eyebrow">
                Tools I use to bring ideas to life
              </p>
              <p className="section-intro__text">
                Focused on practical development and deployment workflows.
              </p>
            </div>
            <SectionTitle
              eyebrow="Skills"
              title="Core skills and technologies I work with"
            />
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <SkillCard
                  key={category.title}
                  title={category.title}
                  accent={category.accent}
                  icon={category.icon}
                  items={category.items}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Learning fast. Building faster.</span>
        </div>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-intro">
              <p className="section-intro__text">
                Projects that reflect real-world problem solving.
              </p>
            </div>
            <SectionTitle
              eyebrow="Projects"
              title="Selected work designed to be practical, polished, and impactful."
            />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} index={index + 1} {...project} />
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Research questions, practical systems, better outcomes.</span>
        </div>

        <section className="section section--muted" id="research">
          <div className="container">
            <SectionTitle
              eyebrow="Research"
              title="Research focused on intelligent systems, embedded computing, networking, and optimization."
            />
            <div className="research-grid">
              {researchPapers.map((paper, index) => (
                <article className="surface-card project-card reveal" key={paper.title}>
                  <div className="project-card__meta">
                    <span className="project-card__index">0{index + 1}</span>
                    <span className="project-card__type">{paper.status}</span>
                  </div>
                  <h3>{paper.title}</h3>
                  <p>{paper.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Learning through structured practice.</span>
        </div>

        <section className="section" id="certifications">
          <div className="container">
            <SectionTitle
              eyebrow="Certifications"
              title="Focused learning across AI, agile, DevOps, and systems fundamentals."
            />
            <div className="certifications-grid">
              {certifications.map((certification, index) => (
                <article className="surface-card certification-card reveal" key={certification.title}>
                  <span className="project-card__index">0{index + 1}</span>
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--muted" id="contact">
          <div className="container">
            <div className="section-intro">
              <p className="section-intro__text">
                Let&apos;s build something meaningful together.
              </p>
            </div>
            <SectionTitle
              eyebrow="Contact"
              title="Let&apos;s connect for internships, collaborations, or new opportunities."
            />
            <div className="contact-layout reveal">
              <div className="contact-card surface-card">
                <p className="contact-card__copy">
                  I&apos;m open to learning opportunities, project collaborations,
                  research conversations, and internships in software development,
                  cloud technology, and AI.
                </p>
                <div className="contact-links">
                  <a href="mailto:varshashoban@gmail.com">Mail: varshashoban@gmail.com</a>
                  <a
                    href="https://github.com/Varshashoban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Varshashoban
                  </a>
                  <a
                    href="https://linkedin.com/in/varsha-shoban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/varsha-shoban
                  </a>
                </div>
              </div>

              <div className="contact-cta surface-card">
                <span className="contact-cta__label">Reach Out</span>
                <h3>Interested in working together?</h3>
                <p>
                  Let&apos;s talk about internships, student opportunities, research,
                  and projects where thoughtful software development can make a
                  difference.
                </p>
                <a className="button button--primary" href="mailto:varshashoban@gmail.com">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
