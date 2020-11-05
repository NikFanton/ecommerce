import { Moment } from 'moment';

export interface IOrder {
    id?: number,
    creationDate?: Moment,
    creditCard?: ICreditCard,
}

interface ICreditCard {
    network?: number,
    number?: number,
}

export class Order implements IOrder {
    constructor(
        public id?: number,
        public creationDate?: Moment,
        public creditCard?: ICreditCard,
    ) { }
}