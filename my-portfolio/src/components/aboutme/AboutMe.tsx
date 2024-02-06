import { motion } from "framer-motion";
import React from "react";
import { Motion } from "../motion/Motion";
import "./aboutme.scss";

export const AboutMe: React.FC = () => {
  return (
    <Motion>
      <section id="about" className="about-me">
        <h2>Acerca de mí</h2>
        <p>
          Soy un apasionado desarrollador web con experiencia en tecnologías
          como React, SpringBoot y Java. Mi objetivo es crear soluciones web
          innovadoras y eficientes que mejoren la experiencia del usuario.
        </p>
      </section>
    </Motion>
  );
};
