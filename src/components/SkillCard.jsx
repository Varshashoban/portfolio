function SkillCard({ title, accent, icon, items }) {
  return (
    <article className="surface-card skill-card reveal">
      <div className="skill-card__header">
        <div className="skill-card__heading">
          <span className="skill-card__icon" aria-hidden="true">
            {icon}
          </span>
          <h3>{title}</h3>
        </div>
        <span className="skill-card__accent">{accent}</span>
      </div>
      <div className="badge-list">
        {items.map((item) => (
          <span className="badge" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
