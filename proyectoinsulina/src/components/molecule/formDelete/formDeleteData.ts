import { Dispatch } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';

export interface FormDeleteData {
    deleteOrder:CreateOrder, 
    setDeleteOrder:Dispatch<CreateOrder>,
    deleteOrderButton: () =>Promise<any>,
};