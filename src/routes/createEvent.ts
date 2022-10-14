import { Response, Request, Router, request} from 'express';
import { Event } from '../models/Event'

const createEvent = Router()

createEvent.post('/', async( req: Request, res: Response) => {
    const {
        eventName,
        eventDate,
        eventStartHour,
        eventAddress,
        eventDescription,
        eventCEP,
        eventParentalRating,
        eventPrice
    } = req.body;
    const events = {
        eventName,
        eventDate,
        eventStartHour,
        eventAddress,
        eventDescription,
        eventCEP,
        eventParentalRating,
        eventPrice
    };

    if(!eventName) {
        res.status(400).json({ error: 'O nome do evento é obrigatório' })
        return;
    }

    if(!eventDate) {
        res.status(400).json({ error: 'A data do evento é obrigatória' })
        return;
    }

    if(!eventStartHour) {
        res.status(400).json({ error: 'A hora que o evento inicia é obrigatória' })
    }

    if(!eventAddress){
        res.status(400).json({ error: 'O endereço do evento é obrigatório' })
    }
    
    if(!eventDescription){
        res.status(400).json({ error: 'A descrição do evento é obrigatória' })
    }

    if(!eventCEP){
        res.status(400).json({ error: 'O CEP do evento é obrigatório' })
    }

    if(!eventParentalRating){
        res.status(400).json({ error: 'A classificação indicativa para o evento é obrigatória'})
    }

    if(!eventPrice){
        res.status(400).json({ error: 'É necessário informar o preço da entrada para o evento'})
    }

    try {
        await Event.create(events);
        res.status(201).json({ message: 'Evento inserido no sistema com sucesso' })
    } catch (err) {
        res.status(500).json({ error: err})
    }
})

export { createEvent };