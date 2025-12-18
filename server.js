import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

console.log(`Loaded EMAIL_USER: ${process.env.EMAIL_USER}`);
console.log(`Loaded EMAIL_PASS: ${process.env.EMAIL_PASS ? '******' + process.env.EMAIL_PASS.slice(-4) : 'Not Set'}`);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Handle the contact route
app.all('/api/contact', async (req, res) => {
  try {
    await contactHandler(req, res);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
