import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 465,
  secure: true,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

export const sendEmail = async (email, subject, text) => {
  try {
    const a = await transporter.sendMail({
      from: process.env.NODE_MAILER_EMAIL,
      to: email,
      subject,
      text,
    });
    console.log(a);
  } catch (error) {
    throw new Error("Error sending email");
  }
};
