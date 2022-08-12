import { DeleteOrders } from "../services/insulineServices";
import DeleteOrderForm from "../components/molecule/formDelete/formDeleteOrder";
import { ButtonForm } from "../components/atom/button/buttonForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CreateOrder } from "../modelsclass/createOrder";
import decodeToken from "../services/decodeToken";

function DeleteOrderPage () {
    const{
        localValue,
    } = decodeToken();
    
    const [deleteOrders, setDeleteOrders ] = useState(new CreateOrder('','', 0, '', '','','',0,''))

    const deleteOrderPermission = async () => {
        const orderToDelete = await DeleteOrders(localValue!, deleteOrders)
        if(orderToDelete === 200){
            window.alert("You're deleted correctly the order")
        }else{
            window.alert("The Id doesn't exist")
        }}
        
    return (
        <>
            <DeleteOrderForm deleteOrder={deleteOrders} setDeleteOrder={setDeleteOrders}></DeleteOrderForm>
            <ButtonForm onClick={deleteOrderPermission}> Eliminar Orden</ButtonForm>
            <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    ) 
}

export default DeleteOrderPage

