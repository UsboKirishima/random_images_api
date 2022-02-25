import express, { Express } from 'express';
import cors from 'cors';
import routes from '../routes';
import imageRouter from '../routes/image';
export function createApp(): Express {
  const app = express();
  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded());

  // Enable CORS
  app.use(cors({ origin: ['http://localhost:3001'], credentials: false }));

  app.use((req, res, next) => setTimeout(() => next(), 800));

  app.use('/api', routes);
  app.use('/api/image', imageRouter);

  return app;
}