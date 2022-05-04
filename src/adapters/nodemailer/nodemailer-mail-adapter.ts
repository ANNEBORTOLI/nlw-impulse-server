import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '709a89609d32e9',
    pass: 'b82aa9b0439890'
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feeget <oi@feedget.com>',
      to: 'Anne Bortoli <annebortoli@gmail.com>',
      subject,
      html: body
    });
  }
}
