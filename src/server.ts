import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import { createEvent } from './routes/createEvent'
import { listEvents } from './routes/listEvent'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/createEvents', createEvent)
app.use('/listEvents', listEvents)


mongoose
  .connect(process.env.DATABASE_CONNECTION as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected / Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
