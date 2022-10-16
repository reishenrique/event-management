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

    try {
        const updatedEvent = await Event.updateOne({ _id: id }, event);
        console.log(updatedEvent)

        if(updatedEvent.matchedCount === 0) {
            res.status(400).json({
                message: 'O evento não foi encontrado para atualização de dados'
            })

            return;
        }

        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

export { updateEvent }