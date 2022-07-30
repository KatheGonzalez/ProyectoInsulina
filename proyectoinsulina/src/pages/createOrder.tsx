import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createTemplate';
import jwt_decode from 'jwt-decode';
import Permissions  from '../modelsclass/permissionsTemplate';
import FormNewOrder from '../components/molecule/formTemplate/formNewOrder';
import { Decode } from '../modelsclass/loginTemplate';
import { ButtonForm } from '../components/atom/button/buttonForm';
import { Link } from 'react-router-dom';
import { CreateOrders } from '../services/insulineServices';

function OrdersPage (){
    const localValue = window.localStorage.getItem('access_token'); 
    const decodeValue:Decode = jwt_decode<Decode>(localValue!);
    const permissionsValue: Array<string> = decodeValue.permissions;

    const [newOrder, setNewOrder] = useState(new CreateOrder('', 0, '', '','','',0,''));
    const changeValue3 = async () => await createPermission(localValue!, newOrder);

    const createPermission = async (token: string, newOrder: CreateOrder) => {
        if(permissionsValue.includes(Permissions.create))
        window.alert((await CreateOrders(token, newOrder))) 
    }

    return(
        <>
             <FormNewOrder newOrder={newOrder} setNewOrder={setNewOrder} />
             <ButtonForm onClick={changeValue3}>Send New Order</ButtonForm>
             <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    )
}

export default OrdersPage