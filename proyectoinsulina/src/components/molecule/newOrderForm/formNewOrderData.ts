import { Dispatch } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';

export interface FormNewOrderData {
    newOrder:CreateOrder, 
    setNewOrder:Dispatch<CreateOrder>
    orderCreated: () => Promise<any>
};

