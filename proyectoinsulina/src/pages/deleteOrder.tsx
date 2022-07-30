import { Decode } from "../modelsclass/loginTemplate";
import { DeleteOrders } from "../services/insulineServices";
import jwt_decode from 'jwt-decode';
import Permissions  from '../modelsclass/permissionsTemplate'
import {DeleteOrder} from "../modelsclass/deleteTemplate";
import DeleteOrderForm from "../components/molecule/formTemplate/formDeleteOrder";
import { ButtonForm } from "../components/atom/button/buttonForm";
import { Link } from "react-router-dom";
import { useState } from "react";

function DeleteOrderPage () {
    const localValue = window.localStorage.getItem('access_token'); 
    const decodeValue:Decode = jwt_decode<Decode>(localValue!)
    const permissionsValue: Array<string> = decodeValue.permissions
    
    const [deleteOrders, setDeleteOrders ] = useState(new DeleteOrder('',''))
    const changeValue3 = async () => await deleteOrderPermission(localValue!, deleteOrders)

    const deleteOrderPermission = (token: string, valueToDelete:DeleteOrder) => {
        if(permissionsValue.includes(Permissions.delete))
        return DeleteOrders(token, valueToDelete)}

    const valores = console.log(deleteOrders.id)
    console.log(valores)
        
    return (
        <>
            <DeleteOrderForm deleteOrder={deleteOrders} setDeleteOrder={setDeleteOrders}></DeleteOrderForm>
            <ButtonForm onClick={changeValue3}> Eliminar Orden</ButtonForm>
            <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    )
}

export default DeleteOrderPage