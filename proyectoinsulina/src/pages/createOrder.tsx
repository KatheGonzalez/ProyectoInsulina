import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createOrder';
import FormNewOrder from '../components/molecule/newOrderForm/formNewOrder';
import { CreateOrders } from '../services/insulineServices';
import decodeToken from '../services/decodeToken';


function CreateOrderPage() {

    const {
        localValue
    } = decodeToken();

    const [newOrder, setNewOrder] = useState(new CreateOrder('', '', 0, '', '', '', 'CREATED', 0, '', ''));

    const orderCreated = async () => {
        const body = {
            ...newOrder,
            data_requested: new Date()
        }

        await CreateOrders(localValue!, body);
        // Codigo no utilizado
    }

    // Etiquetas vacias no necesarias
    return (
        <FormNewOrder
            newOrder={newOrder}
            setNewOrder={setNewOrder}
            orderCreated={orderCreated}/>
    )
}

export default CreateOrderPage;
