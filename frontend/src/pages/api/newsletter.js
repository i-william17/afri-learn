import { Resend } from 'resend';
import { MyCustomEmail } from './EmailTemplate'; // Adjust the path as necessary

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await resend.emails.send({
        from: 'Afribot Robotics Africa <info@afribot.africa>',
        to: email || 'williamsisulu2003@gmail.com',
        subject: 'Thank You for Subscribing to our Newsletter!',
        react: <MyCustomEmail />,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email send error:', error.message);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
