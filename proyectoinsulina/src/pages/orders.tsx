import { useEffect, useState } from "react";
import { TitleStyle } from "../components/atom/title/title.Style";
import { CreateOrder } from "../modelsclass/createOrder";
import decodeToken from "../services/decodeToken";
import { GetOrders } from "../services/insulineServices";
import '../components/atom/orders/orders.css';

const OrdersPage = () => {

    const [orders, setOrders] = useState<CreateOrder[]>([]);  //aqui quiero agarrar todas las ordenes completas
    const [indexOrder, setIndexOrder] = useState(-1);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {      
        const {
            localValue
        } = decodeToken() 
        
        const getOrders = async () => {
            const orderList = await GetOrders(localValue!)
            setOrders(orderList)
        }
        getOrders();
    }, [loading]);

    return (
    <div className="container-orders">
        <table className="table-style">
            <thead>
                <tr className="table-rows">
                    <th className="table-header">Id</th><br></br>
                    <th>Dni</th><br></br>
                    <th>CellPhone</th><br></br>
                    <th>Full Name</th><br></br>
                    <th>Place</th><br></br>
                    <th>Date_Requested</th><br></br>
                    <th>State</th><br></br>
                    <th>Count</th><br></br>
                    <th>Brand</th><br></br>
                    <th>Date_Collected</th><br></br>
                </tr>
            </thead>
            <tbody className="table-body">
                {orders && orders.map((order, index) =>  indexOrder !== index ? 
                <tr key={index}>
                    <td>{order.id}</td><br></br>
                    <td>{order.dni}</td><br></br>
                    <td>{order.cellphone}</td><br></br>
                    <td>{order.full_name}</td><br></br>
                    <td>{order.place}</td><br></br>
                    <td>{order.date_requested}</td><br></br>
                    <td>{order.state}</td><br></br>
                    <td>{order.count}</td><br></br>
                    <td>{order.brand}</td><br></br>
                    <td>{order.date_collected}</td><br></br>
                </tr>
                :
                <TitleStyle>You dont have orders honey!!!</TitleStyle>
                )}
            </tbody>
        </table>
    </div>
)}

export default OrdersPage;