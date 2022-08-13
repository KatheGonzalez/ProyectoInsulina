import { Dispatch } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';

export interface FormUpdateOrder {
    orderUpdated: CreateOrder;
    setOrderUpdated: Dispatch<CreateOrder>
    updateOrderButton: () => Promise<any>
}