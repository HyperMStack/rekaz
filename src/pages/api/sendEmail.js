// import { sendEmail } from "../../lib/sendEmail"; // You'll create this function next
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: { name: "Maen Alamin", address: process.env.USER_EMAIL },
        to: process.env.USER_EMAIL, // Change this to your email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone's number: ${phone}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      // await sendEmail(name, email, phone, message);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Failed to send email Because:${error}` });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
