function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <div className="section-title__rule" />
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
