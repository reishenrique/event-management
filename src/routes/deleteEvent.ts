import { BadRequestError } from './../helpers/api-errors';
import { Response, Request, Router } from 'express';
import { Event } from '../models/Event'

const deleteEvent = Router();

deleteEvent.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const event = await Event.findOne({ _id: id });

    if(!event){ 
        throw new BadRequestError('O evento não foi encontrado para ser removido')
    }

    await Event.deleteOne({ _id: id });
    res.status(200).json({ message: 'Evento removido com sucesso' });
});

export { deleteEvent };
