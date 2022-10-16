import { BadRequestError, InternalServerError } from './../helpers/api-errors';
import { Request, Response, Router } from 'express';
import { Event } from '../models/Event'

const updateEvent = Router();

updateEvent.patch('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const {
        eventName,
        eventDate,
        eventStartHour,
        eventAddress,
        eventDescription,
        eventParentalRating,
        eventPrice,
        eventBatch,
        eventStatus
    } = req.body;

    const event = {
        eventName,
        eventDate,
        eventStartHour,
        eventAddress,
        eventDescription,
        eventParentalRating,
        eventPrice,
        eventBatch,
        eventStatus
    };

    const updatedEvent = await Event.updateOne({ _id: id }, event);
    console.log(updatedEvent)

    if(updatedEvent.matchedCount === 0) {
        throw new BadRequestError('Usuário não foi encontrado para a atualização de dados')
    }

    res.status(200).json(event);
    throw new InternalServerError('Erro interno do servidor');
})

export { updateEvent }