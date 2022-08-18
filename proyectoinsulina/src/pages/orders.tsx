import { useEffect, useState } from "react";
import { TitleStyle } from "../components/atom/title/title.Style";
import { CreateOrder } from "../modelsclass/createOrder";
import { GetOrders } from "../services/insulineServices";
import "../components/atom/orders/orders.css";
import DecodeToken from "../services/decodeToken";

const OrdersPage = () => {

    const [orders, setOrders] = useState<CreateOrder[]>([]);  //aqui quiero agarrar todas las ordenes completas
    const [indexOrder, setIndexOrder] = useState(-1);
    const {
        loading
    } = DecodeToken() 
    
    useEffect(() => {      
        const {
            localValue
        } = DecodeToken() 
        
        async function getOrders () {
            const orderList = await GetOrders(localValue!)
            setOrders(orderList) // aqui supuestamente tengo todas las ordenes 
            console.log(setOrders)
        }
        getOrders();
    }, [loading]);

    return (
    <div className="container-orders">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Dni</th>
                    <th>CellPhone</th>
                    <th>Full Name</th>
                    <th>Place</th>
                    <th>Date_Requested</th>
                    <th>State</th>
                    <th>Count</th>
                    <th>Brand</th>
                    <th>Date_Collected</th>
                </tr>
            </thead>
            <tbody>
                {orders && orders.map((order, index) =>  indexOrder !== index ? 
                <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.dni}</td>
                    <td>{order.cellphone}</td>
                    <td>{order.full_name}</td>
                    <td>{order.place}</td>
                    <td>{order.date_requested}</td>
                    <td>{order.state}</td>
                    <td>{order.count}</td>
                    <td>{order.brand}</td>
                    <td>{order.date_collected?.getDate()}</td>
                </tr>
                :
                <TitleStyle>You dont have orders honey!!!</TitleStyle>
                )}
            </tbody>
        </table>
    </div>
)}

export default OrdersPage;