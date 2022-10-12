import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const projectRender = projects.map((project) => {
    const { id, name, about, technologies } = project;
    return <ProjectItem key={ id } technologies={ technologies } name={ name } about={ about }/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectRender}
      </div>
    </div>
  );
}

export default ProjectList;
