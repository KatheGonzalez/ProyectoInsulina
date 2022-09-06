import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createOrder';
import FormNewOrder from '../components/molecule/newOrderForm/formNewOrder';
import { CreateOrders } from '../services/insulineServices';
import decodeToken from '../services/decodeToken';
import { BackgroundSuccess, ValidationCreateOrder, ValidationIcon, ValidationParragraph } 
from '../components/atom/validationcreateorder/validationCreateOrder';
import img from '../assets/images/icons/success.svg';
import img2 from '../assets/images/icons/trash.svg';


function CreateOrderPage (){
     
    const{
        localValue 
    } = decodeToken();

    
    const [newOrder, setNewOrder] = useState(new CreateOrder('','', 0, '', '','','CREATED',0,'', ''));
  
    const orderCreated = async () => {
        const body = {
          ...newOrder,
          data_requested: new Date()
        }

        const orderCreatedok = await CreateOrders(localValue!, body);
        if(orderCreatedok === 200){
            <BackgroundSuccess>
              <ValidationCreateOrder>
                  <ValidationIcon src={img} alt='Bad-success'/>
                  <ValidationParragraph>
                    La solicitud se ha creado con exito, nuestro equipo sera 
                    notificado para recoger las insulinas
                  </ValidationParragraph>
              </ValidationCreateOrder>
            </BackgroundSuccess>
        } else {
          <BackgroundSuccess>
            <ValidationCreateOrder>
                  <ValidationIcon src={img2} alt='Bad-success'/>
                  <ValidationParragraph>
                    La solicitud se ha creado con exito, nuestro equipo sera 
                    notificado para recoger las insulinas
                  </ValidationParragraph>
              </ValidationCreateOrder>
          </BackgroundSuccess>
        }
      }

    return(
      <>
        <FormNewOrder newOrder={newOrder} 
        setNewOrder={setNewOrder} 
        orderCreated={orderCreated}/>
      </>
    )
};

export default CreateOrderPage;