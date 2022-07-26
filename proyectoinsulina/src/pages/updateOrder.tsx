import { useState } from 'react';
import { UpdateOrders } from '../services/insulineServices';
import { CreateOrder } from '../modelsclass/createOrder';
import decodeToken from '../services/decodeToken';
import FormUpdateOrders from '../components/molecule/updateForm/formUpdateOrder';
import img from '../assets/images/icons/success.svg';
import img2 from '../assets/images/icons/fail.svg';
import { ConfirFail, ConfirSuccess, IconConfirmation, InfoConfir } from '../components/atom/userExperience/userExperienceStyle';

function UpdateOrderPage() {
  const [orderUpdated, setOrderUpdated] = useState(new CreateOrder('','', 0, '', '','','',0,''));
    const{
        localValue
    } = decodeToken();

  const updateOrder = async () => {
    const userLogin = await UpdateOrders(localValue!, orderUpdated);
    if(userLogin === 200){
      <ConfirSuccess>
        <IconConfirmation src={img} alt='Fail Icon icon'/>
        <InfoConfir>Hubo un problema al modificar la solicitud del usuario {orderUpdated.dni}</InfoConfir>
      </ConfirSuccess>
    }else{
      <ConfirFail>
        <IconConfirmation src={img2} alt='Fail Icon icon'/>
        <InfoConfir>Hubo un problema al modificar la solicitud del usuario {orderUpdated.dni}</InfoConfir>
      </ConfirFail>
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
