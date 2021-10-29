import { Router } from 'express';
import { EmailService } from '../services/email';
const router = Router();

router.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA`,
  });
});

router.post('/send-email', async (req, res) => {
  const { body } = req;

  const destination = 'darby.franecki30@ethereal.email';
  const subject = 'Hola Juan Carlos!';
  const content = `
  <h1>HOLAAAA</h1>
  <p> Te queriamos dar la bienvenida a este mundo de nodemailer</p>
  `;

  try {
    const response = await EmailService.sendEmail(
      destination,
      subject,
      content
    );

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
