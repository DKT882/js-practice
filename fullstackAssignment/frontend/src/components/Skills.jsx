const Skills = ({ skills }) => (
  <section className="content-section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">EXPERTISE</p>
        <h2>Skills overview</h2>
      </div>
    </div>

    <div className="skill-list">
      {skills.map((skill) => (
        <article className="skill-card" key={skill.id}>
          <span className="skill-category">{skill.category}</span>
          <h3>{skill.name}</h3>
          <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
