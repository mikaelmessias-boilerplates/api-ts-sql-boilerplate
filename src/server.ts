import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const uploadsPath = express.static(path.resolve(__dirname, '..', 'uploads'));

app.use('/uploads', uploadsPath);

app.listen(3333);
