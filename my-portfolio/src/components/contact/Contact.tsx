import React, { useState } from "react";
import { Motion } from "../motion/Motion";
import { Avatar } from "../avatar/Avatar";
import { Button, Form } from "rsuite";
import "./contact.scss";

export const Contact: React.FC = () => {
  // Estado local para almacenar los datos del formulario y los mensajes de error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitButtonVisible, setSubmitButtonVisible] = useState(false); // Estado para mostrar u ocultar el botón de enviar

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (value: any, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    validateForm(); // Llamar a la función de validación cada vez que cambia un campo del formulario
  };

  // Función para validar el formulario antes de enviar
  const validateForm = () => {
    let isValid = true;
    const errors: any = {};

    // Validar que ningún campo esté vacío
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        errors[key] = "Este campo es obligatorio";
        isValid = false;
      }
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && emailRegex.test(formData.email)) {
      errors.email = "Introduce un correo electrónico válido";
      console.log(emailRegex.test(formData.email));
      isValid = false;
    }

    // Actualizar los mensajes de error
    setFormErrors(errors);

    // Mostrar u ocultar el botón de enviar según si el formulario es válido o no
    setSubmitButtonVisible(isValid);

    return isValid;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      if (!validateForm()) {
        return; // Si el formulario no es válido, no se envía
      }

      // Lógica para enviar el formulario...
    } catch (error) {
      console.error("Hubo un error al enviar el mensaje:", error);
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
              <Form.Group className="form-group">
                <Form.ControlLabel>Nombre</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(value) => handleChange(value, "name")}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.ControlLabel>Correo electrónico</Form.ControlLabel>
                <Form.Control
                  name="email"
                  type="email"
                  onChange={(value) => handleChange(value, "email")}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.ControlLabel>Mensaje</Form.ControlLabel>
                <Form.Control
                  name="message"
                  componentClass="textarea"
                  rows={5}
                  onChange={(value) => handleChange(value, "message")}
                />
              </Form.Group>
              {isSubmitButtonVisible && ( // Mostrar el botón de enviar solo si es visible
                <Button type="submit" className="custom-button">
                  Enviar mensaje
                </Button>
              )}
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
