// Contact.tsx
import React from "react";
import { Motion } from "../motion/Motion";
import { Avatar } from "../avatar/Avatar";
import { Form, FormGroup, ControlLabel, FormControl, Button, Notification } from 'rsuite';
import "./contact.scss";

export const Contact: React.FC = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = async (formData: any) => {
    try {
      // Lógica para enviar el formulario por correo electrónico
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Notification.success({
          title: 'Mensaje enviado',
          description: '¡Tu mensaje ha sido enviado correctamente!'
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      Notification.error({
        title: 'Error',
        description: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  return (
    <Motion>
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="form-container">
            <h2>Contacto</h2>
            <p>¡Hablemos! Estoy disponible para oportunidades emocionantes.</p>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <ControlLabel>Nombre</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Correo electrónico</ControlLabel>
                <FormControl name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Mensaje</ControlLabel>
                <FormControl name="message" componentClass="textarea" rows={5} />
              </FormGroup>
              <Button type="submit">Enviar mensaje</Button>
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
