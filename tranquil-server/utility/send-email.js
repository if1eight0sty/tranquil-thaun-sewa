import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

export const sendEmail = async (email, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.NODE_MAILER_EMAIL,
      to: email,
      subject,
      text,
    });
  } catch (error) {
    throw new Error("Error sending email");
  }
};
