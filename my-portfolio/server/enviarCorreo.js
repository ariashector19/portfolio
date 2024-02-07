const nodemailer = require("nodemailer");

// Configura el transporte de nodemailer con los datos de SMTP de Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mercdamian@gmail.com", // Coloca tu dirección de correo de Gmail
    pass: "tkgt mxlh drhl ilmt", // Coloca la contraseña de aplicación generada en Google
  },
});

// Función para enviar un correo electrónico
const enviarCorreo = async (destinatario, asunto, cuerpo) => {
  try {
    // Configura el correo electrónico a enviar
    const mailOptions = {
      from: "mecdamian@gmail.com", // Dirección de correo remitente
      to: destinatario, // Dirección de correo destinatario
      subject: asunto, // Asunto del correo
      html: cuerpo, // Cuerpo del correo (puede ser HTML)
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);
    return {
      success: true,
      message: "Correo electrónico enviado correctamente",
    };
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false, message: "Error al enviar el correo electrónico" };
  }
};

// Exporta la función enviarCorreo para que pueda ser utilizada en otros archivos
module.exports = enviarCorreo;
