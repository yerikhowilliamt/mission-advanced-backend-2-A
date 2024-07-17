const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const createEmail = (email, token) => {
  const verificationUrl = `http://localhost:4000/verify-email?token=${token}`;
  return {
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Email Verification",
    html: `
    <h3>Untuk mengaktifkan akun, silakan klik link di bawah ini:</h3>
      <a href="${verificationUrl}">Link aktivasi</a>
    `,
  };
};

const sendEmail = (email, token) => {
  return new Promise((resolve, reject) => {
    const mailOptions = createEmail(email, token);
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        reject(err);
      } else {
        console.log("Email sent:", info.response);
        resolve(true);
      }
    });
  });
};

module.exports = sendEmail;
