// sendEmail.js
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;
l
// Middleware para parsear el cuerpo del formulario
app.use(bodyParser.json());

// Configura tu clave de API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Ruta para enviar correos electrónicos
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Configuración del correo electrónico
  const msg = {
    to: 'cordobesenchile1@gmail.com', // Cambia esto por tu dirección de correo electrónico personal
    from: 'bot@example.com', // Dirección de correo electrónico del bot
    subject: 'Nuevo mensaje de contacto',
    html: `
      <p>Nombre: ${name}</p>
      <p>Correo electrónico: ${email}</p>
      <p>Mensaje: ${message}</p>
    `,
  };

  try {
    // Envía el correo electrónico utilizando SendGrid
    await sgMail.send(msg);
    res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor de correo electrónico escuchando en el puerto ${PORT}`);
});
