import { BadRequestError } from '../../helpers/api-errors';
import { Response, Request, Router} from 'express';
import { Event } from '../../models/Event'

const createEvent = Router()

createEvent.post('/', async( req: Request, res: Response) => {
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
    const events = {
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

    if(!eventName) {
        throw new BadRequestError('O nome do evento é obrigatório');
    }

    if(!eventDate) {
        throw new BadRequestError('A data do evento é obrigatória');
    }

    if(!eventStartHour) {
        throw new BadRequestError('A hora que o evento inicia é obrigatória');
    }

    if(!eventAddress){
        throw new BadRequestError('O endereço do evento é obrigatório');
    }
    
    if(!eventDescription){
        throw new BadRequestError('A descrição do evento é obrigatória');
    }

    if(!eventBatch){
        throw new BadRequestError('É necessário informar qual lote o evento se encontra para compra');
    }

    if(!eventParentalRating){
        throw new BadRequestError('A classificação indicativa para o evento é obrigatória');
    }

    if(!eventPrice){
        throw new BadRequestError('É necessário informar o preço da entrada para o evento');
    }

    if(!eventStatus){
        throw new BadRequestError('É necessário informar qual o status do evento para o cadastro');
    }

    await Event.create(events);
    res.status(201).json({ message: 'Evento inserido no sistema com sucesso' })
})

export { createEvent };
