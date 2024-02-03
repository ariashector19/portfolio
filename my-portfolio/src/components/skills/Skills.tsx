import React from "react";
import { Motion } from "../motion/Motion";
import "./skills.scss";

export const Skills: React.FC = () => {
  return (
    <Motion>
      <section id="skills" className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>SpringBoot</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
    </Motion>
  );
};
