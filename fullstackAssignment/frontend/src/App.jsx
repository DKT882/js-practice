import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));

    fetch("http://localhost:8000/api/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills));

    fetch("http://localhost:8000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <main className="dashboard">
      <header className="hero">
        <p className="eyebrow">TEAM DIRECTORY</p>
        <h1>People, skills, and projects in one place.</h1>
      </header>

      <Users users={users} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </main>
  );
};

export default App;
