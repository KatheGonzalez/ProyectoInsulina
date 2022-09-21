import { Dispatch } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';

export interface FormDeleteData {
    deleteOrder: CreateOrder,
    setDeleteOrder: Dispatch<CreateOrder>,
    // esto deberia ser void por que no retorna nada
    deleteOrderButton: () => void,
}
