function ProjectCard({ index, title, description, tech, link }) {
  return (
    <article className="surface-card project-card reveal">
      <div className="project-card__meta">
        <span className="project-card__index">0{index}</span>
        <span className="project-card__type">Featured Project</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="badge-list">
        {tech.map((item) => (
          <span className="badge badge--accent" key={item}>
            {item}
          </span>
        ))}
      </div>
      <a className="project-card__link" href={link} target="_blank" rel="noreferrer">
        View Code
      </a>
    </article>
  );
}

export default ProjectCard;
