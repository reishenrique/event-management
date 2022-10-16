import { InternalServerError } from './../helpers/api-errors';
import { Response, Request, Router } from 'express';
import { Event } from '../models/Event';

const listEvents = Router();

listEvents.get('/', async (_req: Request, res: Response) => {
    const events = await Event.find();
    res.status(200).json(events);
    
    throw new InternalServerError('Erro interno do servidor');    
});

export { listEvents }
