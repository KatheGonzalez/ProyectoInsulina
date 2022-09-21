import { useState } from 'react';
import { UpdateOrders } from '../services/insulineServices';
import { CreateOrder } from '../modelsclass/createOrder';
import decodeToken from '../services/decodeToken';
import FormUpdateOrders from '../components/molecule/updateForm/formUpdateOrder';
// Nombres en los imports poco dicientes, que es img2? ... no de diferencia del 1
// import img from '../assets/images/icons/success.svg';
// import img2 from '../assets/images/icons/fail.svg';
// import { ConfirFail, ConfirSuccess, IconConfirmation, InfoConfir } from '../components/atom/userExperience/userExperienceStyle';

// Estandarización de identado
function UpdateOrderPage() {
    const [orderUpdated, setOrderUpdated] = useState(new CreateOrder('', '', 0, '', '', '', 'CREATED', 0, ''));
    const {
        localValue
    } = decodeToken();

    // Esta función retorna un void por lo cual el codigo html nisiquiera lo lee
    const updateOrder = async () => {
        await UpdateOrders(localValue!, orderUpdated);

        // Este codigo no sirve y nunca se llama, deberia ser eliminado en ese caso
        // if(userLogin === 200){
        //   <ConfirSuccess>
        //     <IconConfirmation src={img} alt='Fail Icon icon'/>
        //     <InfoConfir>Hubo un problema al modificar la solicitud del usuario {orderUpdated.dni}</InfoConfir>
        //   </ConfirSuccess>
        // }else{
        //   <ConfirFail>
        //     <IconConfirmation src={img2} alt='Fail Icon icon'/>
        //     <InfoConfir>Hubo un problema al modificar la solicitud del usuario {orderUpdated.dni}</InfoConfir>
        //   </ConfirFail>
        // }
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
