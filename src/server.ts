import 'dotenv/config';
import 'express-async-errors'
import express from 'express';
import mongoose from 'mongoose';

import { createEvent } from './routes/createEvent'
import { listEvents } from './routes/listEvents'
import { getEvent } from './routes/getEvent'
import { updateEvent } from './routes/updateEvent'
import { deleteEvent } from './routes/deleteEvent'
import { userCreate } from './controller/UserController';

import { errorMiddleware } from './middleware/error';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/events', createEvent)
app.use('/events', listEvents)
app.use('/events', getEvent)
app.use('/events', updateEvent)
app.use('/events', deleteEvent)
app.use('/users', userCreate) 

app.use(errorMiddleware)

mongoose
  .connect(process.env.DATABASE_CONNECTION as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected / Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
