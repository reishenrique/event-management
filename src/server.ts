import 'dotenv/config';
import 'express-async-errors'
import express from 'express';
import mongoose from 'mongoose';

import { createEvent } from './controller/events/CreateEvent'
import { listEvents } from './controller/events/ListEvents'
import { getEvent } from './controller/events/GetEvent'
import { updateEvent } from './controller/events/UpdateEvent'
import { deleteEvent } from './controller/events/DeleteEvent'
import { userCreate } from './controller/users/UserController';
import { loginUser } from './controller/users/LoginController';
import { getProfile } from './controller/users/GetProfile';

import { errorMiddleware } from './middleware/error';
import { authMiddleware } from './middleware/authMiddleware';

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
app.use('/login', loginUser)
app.use('/profile', authMiddleware, getProfile)

app.use(errorMiddleware)

mongoose
  .connect(process.env.DATABASE_CONNECTION as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected / Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
