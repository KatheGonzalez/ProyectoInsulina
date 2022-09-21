import { Dispatch } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';

export interface FormNewOrderData {
    newOrder: CreateOrder,
    setNewOrder: Dispatch<CreateOrder>
    orderCreated: () => void
}

// En interfaces o funciones externas no es necesario poner punto y coma al final

