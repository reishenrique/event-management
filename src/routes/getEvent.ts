import { BadRequestError, NotFoundError } from './../helpers/api-errors';
import { Router, Request, Response } from 'express';
import { Event } from '../models/Event';

const getEvent = Router();

getEvent.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id

    if(!id) {
        throw new BadRequestError('Id inválido')
    }

    try {
        const events = await Event.findOne({ _id: id })
        res.status(200).json(events);
    } catch (error) {
        throw new NotFoundError('Evento não encontrado')
    }
})

export { getEvent }
