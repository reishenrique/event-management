import { Schema, model } from 'mongoose';

interface IEvent {
  eventName: string;
  eventDate: string;
  eventStartHour: number;
  eventAddress: string;
  eventDescription: string;
  eventDuration: number;
  eventParentalRating: number;
  eventPrice: number;
}

const eventSchema = new Schema<IEvent>({
  eventName: { type: String, required: true },
  eventDate: { type: String, required: true },
  eventStartHour: { type: Number, required: true },
  eventAddress: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventDuration: { type: Number, required: true },
  eventParentalRating: { type: Number, required: true },
  eventPrice: { type: Number, required: true }
});

const Event = model<IEvent>('Event', eventSchema);

export { Event };
