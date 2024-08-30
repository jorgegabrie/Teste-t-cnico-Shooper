import express from 'express';
import { uploadImagem } from './controllers/uploadController';

const app = express();
app.use(express.json());

app.post('/upload', uploadImagem);

export default app;
