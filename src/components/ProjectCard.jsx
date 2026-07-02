function ProjectCard({ index, title, description, tech, status = 'Completed', links = [] }) {
  return (
    <article className="surface-card project-card reveal">
      <div className="project-card__meta">
        <span className="project-card__index">0{index}</span>
        <span className="project-card__type">{status}</span>
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
      <div className="project-card__links">
        {links.map((item) =>
          item.href ? (
            <a
              className="project-card__link"
              href={item.href}
              target={item.href.startsWith('#') ? undefined : '_blank'}
              rel={item.href.startsWith('#') ? undefined : 'noreferrer'}
              key={item.label}
            >
              {item.label}
            </a>
          ) : (
            <span className="project-card__link project-card__link--disabled" key={item.label}>
              {item.label}
            </span>
          )
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
