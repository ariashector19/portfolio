import React from "react";
import { Motion } from "../motion/Motion";
import "./contact.scss";

export const Contact: React.FC = () => {
  return (
    <Motion>
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>¡Hablemos! Estoy disponible para oportunidades emocionantes.</p>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>
    </Motion>
  );
};
