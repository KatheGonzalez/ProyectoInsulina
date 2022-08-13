import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createOrder';
import FormNewOrder from '../components/molecule/newOrderForm/formNewOrder';
import { CreateOrders } from '../services/insulineServices';
import decodeToken from '../services/decodeToken';

function CreateOrderPage (){
     
    const{
        localValue 
    } = decodeToken();

    const [newOrder, setNewOrder] = useState(new CreateOrder('','', 0, '', '','','',0,''));

    const orderCreated = async () => {
        const orderCreatedok = await CreateOrders(localValue!, newOrder);
        if(orderCreatedok === 200){
          window.alert('The new Order was created correctly');
        }else{
          window.alert('The order was NOT created something is wrong')
        }
      }

    return(
        <FormNewOrder newOrder={newOrder} 
        setNewOrder={setNewOrder} 
        orderCreated={orderCreated}/>
    )
}

export default CreateOrderPage;