import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const skillCategories = [
  {
    title: 'Programming',
    accent: '01',
    icon: '</>',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Web',
    accent: '02',
    icon: 'UI',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Full-Stack Development (basics)'],
  },
  {
    title: 'DevOps & Tools',
    accent: '03',
    icon: 'CLD',
    items: [
      'Git & GitHub',
      'Docker',
      'Jenkins',
      'AWS (EC2, S3, IAM, VPC)',
      'VS Code',
      'Figma',
    ],
  },
];

const projects = [
  {
    title: 'Smart Study Planner',
    description:
      'Helps students organize study schedules and manage tasks efficiently.',
    tech: ['React', 'Docker', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Varshashoban/smart-study-planner.git',
  },
  {
    title: 'Sea Level Rise Dashboard',
    description:
      'Visualizes sea level data to show environmental impact trends.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Varshashoban/sea-level-rise-dashboard.git',
  },
  {
    title: 'Jenkins CI/CD Setup',
    description:
      'Implements a CI/CD pipeline with Jenkins for automated build and deployment.',
    tech: ['Jenkins', 'GitHub', 'Python'],
    link: 'https://github.com/Varshashoban/Jenkins2.git',
  },
];

const highlights = [
  'Cloud-first learning',
  'Responsive UI building',
  'Deployment-ready workflows',
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
              <p className="hero__eyebrow">Portfolio 2026</p>
              <h1 className="hero__name">S Varsha</h1>
              <h2 className="hero__title">
                CSE Student | Cloud-Enabled Full-Stack Developer
              </h2>
              <p className="hero__headline">
                Building scalable web applications with cloud-first thinking.
              </p>
              <p className="hero__tagline">
                I build and deploy real-world web applications using modern cloud
                tools.
              </p>
              <p className="hero__subtagline">
                Designing systems that are simple, scalable, and impactful.
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
                  <span className="hero-card__label">Focused Learning Path</span>
                  <h3>Structured growth across frontend, cloud, and deployment.</h3>
                  <p>
                    A clean development approach built around practical React
                    interfaces, AWS fundamentals, and DevOps-ready workflows.
                  </p>
                </div>

                <div className="hero-visual__grid">
                  <div className="hero-visual__item">
                    <strong>Frontend</strong>
                    <span>React, JavaScript, HTML, CSS</span>
                  </div>
                  <div className="hero-visual__item">
                    <strong>Cloud</strong>
                    <span>AWS fundamentals with deployment-oriented thinking</span>
                  </div>
                  <div className="hero-visual__item">
                    <strong>Workflow</strong>
                    <span>GitHub, Docker, Jenkins, and project-based learning</span>
                  </div>
                </div>
                <div className="hero-visual__footer">
                  <div>
                    <strong>Goal</strong>
                    <span>Internship-ready portfolio with practical, real-world project depth.</span>
                  </div>
                  <div>
                    <strong>Approach</strong>
                    <span>Clean code, thoughtful structure, and polished presentation.</span>
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
              title="Building useful digital experiences with clarity and purpose."
            />
            <div className="about-layout reveal">
              <div className="about-card surface-card">
                <div className="about-tags">
                  <span className="badge">Cloud-focused</span>
                  <span className="badge">Project-driven</span>
                  <span className="badge">Consistent learner</span>
                </div>
                <p className="about-card__lead">
                  I am a 2nd-year B.Tech Computer Science and Engineering student
                  at VIT Chennai.
                </p>
                <p>
                  I am currently focusing on full-stack development, cloud
                  technologies (AWS), and building real-world projects.
                </p>
                <p>
                  I enjoy turning ideas into simple, functional, and impactful
                  applications.
                </p>
              </div>

              <div className="about-visual surface-card">
                <div className="about-visual__header">
                  <span className="about-visual__eyebrow">What drives my work</span>
                  <h3>Practical learning with clear technical direction.</h3>
                </div>
                <div className="about-visual__metric">
                  <strong>Cloud-first</strong>
                  <span>Learning deployment patterns, infrastructure basics, and practical workflows.</span>
                </div>
                <div className="about-visual__metric">
                  <strong>Real projects</strong>
                  <span>Applying classroom knowledge to tools that solve genuine user needs.</span>
                </div>
                <div className="about-visual__metric">
                  <strong>User clarity</strong>
                  <span>Designing interfaces that are simple to use, readable, and purposeful.</span>
                </div>
                <div className="about-visual__ribbon">VIT Chennai | CSE</div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider">
          <span>Clean code. Clear thinking. Real impact.</span>
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
                  and internship conversations in software development and cloud
                  technology.
                </p>
                <div className="contact-links">
                  <a href="mailto:varshashoban@gmail.com">Mail: varshashoban@gmail.com</a>
                  <a href="tel:9677632754">Phone: 9677632754</a>  
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
                  Let&apos;s talk about internships, student opportunities, and
                  projects where thoughtful frontend and cloud skills can make a
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
