var nodemailer = require("nodemailer");
import { mailTemplate } from "../utils/mailTemplate";

export async function sendMail(body) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_MEMIMAIL,
    subject: `Hola Memi, te ha llegado un mensaje nuevo de ${body.name}!`,
    html: mailTemplate(body.name, body.message, body.email),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
