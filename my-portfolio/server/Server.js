const express = require("express");
const bodyParser = require("body-parser");
const enviarCorreo = require("./enviarCorreo.js"); // Importa la función enviarCorreo que creamos anteriormente
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware para parsear el cuerpo del formulario
app.use(bodyParser.json());

// Ruta para enviar correos electrónicos
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Construye el cuerpo del correo electrónico
  const cuerpoCorreo = `
    <p>Nombre: ${name}</p>
    <p>Correo electrónico: ${email}</p>
    <p>Mensaje: ${message}</p>
  `;

  // Envía el correo electrónico
  const resultadoEnvio = await enviarCorreo(
    "cordobesenchile1@gmail.com", // Coloca la dirección de correo destino
    "Nuevo mensaje de contacto", // Asunto del correo
    cuerpoCorreo // Cuerpo del correo
  );

  // Envía la respuesta al cliente
  if (resultadoEnvio.success) {
    res.status(200).json({ message: resultadoEnvio.message });
  } else {
    res.status(500).json({ error: resultadoEnvio.message });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor de correo electrónico escuchando en el puerto ${PORT}`);
});
