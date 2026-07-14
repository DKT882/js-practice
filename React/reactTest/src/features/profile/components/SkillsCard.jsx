function SkillsCard({ title, description, projects }) {
    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="cardLabel">Related projects:</p>
            <ul>
                {projects.map((project) => (
                    <li key={project}>{project}</li>
                ))}
            </ul>
        </article>
    )
}

export default SkillsCard
