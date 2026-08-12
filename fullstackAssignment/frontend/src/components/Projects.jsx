const Projects = ({ projects }) => (
  <section className="content-section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">WORK</p>
        <h2>Current projects</h2>
      </div>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <div className="project-topline">
            <span className={`status ${project.status.toLowerCase().replace(" ", "-")}`}>{project.status}</span>
            <span>{project.userIds.length} contributors</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
