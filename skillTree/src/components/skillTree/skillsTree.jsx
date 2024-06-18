import style from '../skillTree/skillTree.module.scss'


const ProjectTree = ({ projects }) => {
  const renderProject = (project) => {
    return (
      <li key={project.id}>
        <div>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
        </div>
        {project.children.length > 0 && (
          <ul>
            {project.children.map((child) => renderProject(child))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="project-tree">
      <ul>
        {projects.map((project) => renderProject(project))}
      </ul>
    </div>
  );
};

export default ProjectTree;
