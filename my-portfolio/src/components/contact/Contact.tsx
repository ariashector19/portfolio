import React, { useState } from "react";
import { Motion } from "../motion/Motion";
import { Avatar } from "../avatar/Avatar";
import { Button, Form } from "rsuite";
import "./contact.scss";

export const Contact: React.FC = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (value: any, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      debugger;
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Enviar los datos del formulario como JSON
      });

      if (response.ok) {
        debugger;
        console.log("¡Mensaje enviado correctamente!");
        // Aquí puedes mostrar una notificación o realizar alguna otra acción si el envío es exitoso
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Hubo un error al enviar el mensaje:", error);
      // Aquí puedes mostrar una notificación de error o realizar alguna otra acción si hay un error en el envío
    }
  };

  return (
    <Motion>
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="form-container">
            <h2>Contacto</h2>
            <p>¡Hablemos! Estoy disponible para oportunidades emocionantes.</p>
            <Form onSubmit={handleSubmit} className="custom-form">
              <Form.Group>
                <Form.ControlLabel>Nombre</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(value) => handleChange(value, "name")}
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Correo electrónico</Form.ControlLabel>
                <Form.Control
                  name="email"
                  type="email"
                  onChange={(value) => handleChange(value, "email")}
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Mensaje</Form.ControlLabel>
                <Form.Control
                  name="message"
                  componentClass="textarea"
                  rows={5}
                  onChange={(value) => handleChange(value, "message")}
                />
              </Form.Group>
              <Button type="submit" className="custom-button">
                Enviar mensaje
              </Button>
            </Form>
          </div>
          <div className="avatar-container">
            <Avatar />
          </div>
        </div>
      </section>
    </Motion>
  );
};
