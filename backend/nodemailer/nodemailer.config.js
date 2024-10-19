// nodemailer.config.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sender = {
  email: process.env.EMAIL_USER,
  name: "Dilpreet Singh",
};
