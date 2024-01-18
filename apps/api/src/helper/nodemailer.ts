import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer';

export const resetPassword = (email: string, resetToken: string) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL!,
      pass: process.env.MY_PASSWORD!,
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.MY_EMAIL!,
    to: email,
    subject: 'Reset Password',
    text: `Click the link to reset your password: http://localhost:3000/reset-password?resetToken=${resetToken}&email=${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
