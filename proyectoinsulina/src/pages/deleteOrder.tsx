import { DeleteOrders } from "../services/insulineServices";
import DeleteOrderForm from "../components/molecule/formDelete/formDeleteOrder";
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
        <DeleteOrderForm deleteOrder={deleteOrders} 
        setDeleteOrder={setDeleteOrders} 
        deleteOrderButton={deleteOrderPermission}/>
    ) 
}

export default DeleteOrderPage;

