import { BadRequestError, InternalServerError } from './../helpers/api-errors';
import { Router, Request, Response } from 'express';
import { Event } from '../models/Event';

const getEvent = Router();

getEvent.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const events = await Event.findOne({ _id: id })
    if(!events){
        throw new BadRequestError('O evento não foi encontrado');
    }

    res.status(200).json(events);

    throw new InternalServerError('Erro interno do servidor')
})

export { getEvent }