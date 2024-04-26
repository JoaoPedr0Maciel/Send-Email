import { SendMailModel } from "../interfaces/SendMailModel";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export class SendMailService {
  async sendMail({ name, lastName, email }: SendMailModel) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASSWORD,
      },
    });

    try {
      const message = await transporter.sendMail({
        from: "João Pedro Maciel <joaopedroomaciell@gmail.com>",
        to: email,
        subject: "Email para confirmação de compra",
        html: `Obrigado <strong>${name} ${lastName}</strong> seu produto está disponivel <a href="">AQUI</a>`,
      });

      console.log("E-mail enviado:", message);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  }
}
