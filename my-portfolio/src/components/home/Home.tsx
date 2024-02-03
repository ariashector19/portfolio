// Home.tsx
import React from "react";
import { Motion } from "../motion/Motion";
import "./home.scss";

export const Home: React.FC = () => {
  return (
    <Motion>
      <div className="home-container">
        <h1>Bienvenido a mi Portafolio como Desarrollador Web</h1>
      </div>
    </Motion>
  );
};
