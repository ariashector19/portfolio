import React from "react";
import "./projects.scss";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <h3>Proyecto 1</h3>
        <p>Descripción breve del proyecto.</p>
      </div>
      <div className="project">
        <h3>Proyecto 2</h3>
        <p>Otra descripción corta del proyecto.</p>
      </div>
    </section>
  );
};
