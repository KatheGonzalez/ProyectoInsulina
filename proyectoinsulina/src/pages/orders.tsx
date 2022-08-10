import { useState } from "react";
import { TitleStyle } from "../components/atom/title/title.Style";
import { CreateOrder } from "../modelsclass/createOrder";
import decodeToken from "../services/decodeToken";
import { GetOrders } from "../services/insulineServices";
import '../components/atom/orders/orders.css';

const OrdersPage = () => {

    const {
        localValue
    } = decodeToken() 
    
    const [orders, setOrders] = useState<CreateOrder[]>([]);  //aqui quiero agarrar todas las ordenes completas
    const [indexOrder, setIndexOrder] = useState(-1);
    
    const getOrders = async () => {
        const orderList = await GetOrders(localValue!)
        setOrders(orderList)
    }
    getOrders();

    return (
    <div className="container-orders">
        <table className="table-style">
            <thead>
                <tr className="table-rows">
                    <th className="table-header">Id</th>
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
            <tbody className="table-body">
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
                    <td>{order.date_collected}</td>
                </tr>
                :
                <TitleStyle>You dont have orders honey!!!</TitleStyle>
                )}
            </tbody>
        </table>
    </div>
)}

export default OrdersPage;