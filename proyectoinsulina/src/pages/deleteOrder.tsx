import { Decode } from "../modelsclass/validation";
import { DeleteOrders } from "../services/insulineServices";
import jwt_decode from 'jwt-decode';
import Permissions  from '../modelsclass/permissions'
import DeleteOrderForm from "../components/molecule/formTemplate/formDeleteOrder";
import { ButtonForm } from "../components/atom/button/buttonForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CreateOrder } from "../modelsclass/createOrder";

function DeleteOrderPage () {
    const localValue = window.localStorage.getItem('access_token'); 
    const decodeValue:Decode = jwt_decode<Decode>(localValue!)
    const permissionsValue: Array<string> = decodeValue.permissions
    
    const [deleteOrders, setDeleteOrders ] = useState(new CreateOrder('','', 0, '', '','','',0,''))
    const changeValue3 = async () => await deleteOrderPermission(localValue!, deleteOrders)

    const deleteOrderPermission = async (token: string, valueToDelete:CreateOrder) => {
        if(permissionsValue.includes(Permissions.delete))
        window.alert(await DeleteOrders(token, valueToDelete))

    const valores = console.log(deleteOrders.id)
    console.log(valores)}
        
    return (
        <>
            <DeleteOrderForm deleteOrder={deleteOrders} setDeleteOrder={setDeleteOrders}></DeleteOrderForm>
            <ButtonForm onClick={changeValue3}> Eliminar Orden</ButtonForm>
            <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    ) 
}

export default DeleteOrderPage