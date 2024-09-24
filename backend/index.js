import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ImageKit from 'imagekit';

const port = process.env.PORT || 3000;
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
console.log(process.env.IMAGE_KIT_PUBLIC_KEY);
console.log(process.env.IMAGE_KIT_ENDPOINT);
console.log(process.env.IMAGE_KIT_PRIVATE_KEY);

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
