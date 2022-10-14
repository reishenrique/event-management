import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import { createEvent } from './routes/createEvent'
import { listEvents } from './routes/listEvents'
import { getEvent } from './routes/getEvent'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/createEvent', createEvent)
app.use('/listEvents', listEvents)
app.use('/getEvent', getEvent)

mongoose
  .connect(process.env.DATABASE_CONNECTION as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected / Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
