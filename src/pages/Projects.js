import ProjectCard from "../components/project_card/ProjectCard";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
