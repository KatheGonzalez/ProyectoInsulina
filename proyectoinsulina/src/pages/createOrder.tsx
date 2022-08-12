import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createOrder';
import FormNewOrder from '../components/molecule/newOrderForm/formNewOrder';
import { ButtonForm } from '../components/atom/button/buttonForm';
import { Link } from 'react-router-dom';
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
        <>
             <FormNewOrder newOrder={newOrder} setNewOrder={setNewOrder}/>
             <ButtonForm onClick={orderCreated}>Send New Order</ButtonForm>
             <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    )
}

export default CreateOrderPage;