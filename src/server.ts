import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '709a89609d32e9',
    pass: 'b82aa9b0439890'
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  transport.sendMail({});

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('HTTP server running!');
});
