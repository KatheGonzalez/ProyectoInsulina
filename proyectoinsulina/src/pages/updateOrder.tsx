import { useState } from 'react';
import { UpdateOrders } from '../services/insulineServices';
import { CreateOrder } from '../modelsclass/createOrder';
import decodeToken from '../services/decodeToken';
import FormUpdateOrders from '../components/molecule/updateForm/formUpdateOrder';


function UpdateOrderPage() {
  const [orderUpdated, setOrderUpdated] = useState(new CreateOrder('','', 0, '', '','','',0,''));
    const{
        localValue
    } = decodeToken();

  const updateOrder = async () => {
    const userLogin = await UpdateOrders(localValue!, orderUpdated);
    if(userLogin === 200){
      window.alert('You order has been updated');
    }else{
      window.alert('You order was not updated')
    }
  }

  return (
      <FormUpdateOrders
        orderUpdated={orderUpdated}
        setOrderUpdated={setOrderUpdated}
        updateOrderButton={updateOrder}
        />    
  );
}

export default UpdateOrderPage;
