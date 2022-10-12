import React from "react";

function ProjectItem({ name, about, technologies }) {
  const renderTechs = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechs}
      </div>
    </div>
  );
}

export default ProjectItem;
