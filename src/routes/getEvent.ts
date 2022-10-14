import { Router, Request, Response } from 'express';
import { Event } from '../models/Event';

const getEvent = Router();

getEvent.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const events = await Event.findOne({ _id: id })
        if(!events){
            res.status(400).json({ message: 'O evento não foi encontrado' })
        }

        res.status(200).json(events);
    } catch(err) {
        res.status(500).json({ error: err })
    }
})

export { getEvent }