const Users = ({ users }) => (
  <section className="content-section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">PEOPLE</p>
        <h2>Meet the team</h2>
      </div>
      <span>{users.length} members</span>
    </div>

    <div className="user-grid">
      {users.map((user) => (
        <article className="user-card" key={user.id}>
          <div className="avatar">{user.name.split(" ").map((part) => part[0]).join("")}</div>
          <div>
            <h3>{user.name}</h3>
            <a href={`${user.email}`}>{user.email}</a>
          </div>
          <p>{user.skillIds.length} skills · {user.projectIds.length} projects</p>
        </article>
      ))}
    </div>
  </section>
);

export default Users;
