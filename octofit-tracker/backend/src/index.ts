import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import db from './config/database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-tracker-backend',
    port,
    mongo: db.readyState === 1 ? 'connected' : 'disconnected',
    baseUrl,
  });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening on ${baseUrl}`);
});
