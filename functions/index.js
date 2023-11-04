import serverless from 'serverless-http';
import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const port = process.env.PORT || 3000;
const app = express();
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const ORIGINS = [
  'https://maximeabade.fr',
  'https://maximeabade-mailing-6eaa14b5fb60.herokuapp.com',
  'https://maxime-abade-portfolio-f25405c6170f.herokuapp.com/',
  'https://maxime-abade-portfolio-f25405c6170f.herokuapp.com/contact',
  'http://85.215.38.237:3000',
  'http://85.215.38.237:3000/contact'
];

app.use(
  cors({
    origin: ORIGINS,
  })
);
app.use(helmet());
app.use(json());

app.options('*', cors());

app.post('/message', async (req, res) => {
  try {
    const email = DOMPurify.sanitize(req.body.email);
    const message = DOMPurify.sanitize(req.body.message);

    // Validate email request
    if (!email || !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Rejected', error);
    return res.status(500).json({ error: 'Message rejected' });
  }
});

export const handler = serverless(app);
app.listen(port, () => console.log(`Listening on port ${port}`));
