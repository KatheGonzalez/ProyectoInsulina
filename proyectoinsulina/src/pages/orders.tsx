import { useEffect, useState } from "react";
import { TitleStyle } from "../components/atom/title/title.Style";
import { CreateOrder } from "../modelsclass/createOrder";
import { DeleteOrders, GetOrders, UpdateOrders } from "../services/insulineServices";
import DecodeToken from "../services/decodeToken";
import { ButtonForm } from "../components/atom/button/buttonForm";
import { Link } from "react-router-dom";
import Permissions  from '../modelsclass/permissions';
import "../components/atom/orders/orders.css";
import { InputForm } from "../components/atom/input/inputForm";

const OrdersPage = () => {

    const [orders, setOrders] = useState<CreateOrder[]>([]);  //aqui quiero agarrar todas las ordenes completas
    const [indexOrder, setIndexOrder] = useState(-1);
    const [loading, setLoading] = useState(true);
    const [orderSelected, setOrderSelected] = useState(new CreateOrder('','', 0, '', '','','',0,'', ''))

    const {
        localValue, 
        permissionsValue
    } = DecodeToken()
    
    useEffect(() => {    
        async function getOrders () {
            const orderList = await GetOrders(localValue!)
            setOrders(orderList) // aqui supuestamente tengo todas las ordenes 
        }
        getOrders();
    }, [loading]);

    const deleteOrderForm = async (id:string) => {
        const algo = {
            id: id,
            state: "DELETED"
        }
        await DeleteOrders(localValue!, algo)
    }

    const orderSelectedd = (index:number, order: CreateOrder) => {
        setIndexOrder(index)
        setOrderSelected(order)
    }

    const updateOrderForm = async (orderUpdated: CreateOrder) => {
        await UpdateOrders(localValue!, orderUpdated)
    }

    
    const orderSelectedChangeValue = (event: any) => setOrderSelected({...orderSelected, [event.target.name]:event.target.value});

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
                {orders && orders.map((order, index) => indexOrder !== index ? 
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
                    <td>{(permissionsValue.includes(Permissions.read) && permissionsValue.includes(Permissions.delete)) &&
                    <ButtonForm onClick={()=>{deleteOrderForm(order.id!)}}><span className="material-symbols-outlined">
                    delete
                    </span></ButtonForm>}</td>
                    <td>{(permissionsValue.includes(Permissions.read) && permissionsValue.includes(Permissions.update)) &&
                    <ButtonForm onClick={()=>{orderSelectedd(index, order)}}><span className="material-symbols-outlined">
                    edit
                    </span></ButtonForm>}</td>
                </tr>
                :
                <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.dni}</td>
                    <td>{order.cellphone}</td>
                    <td>{order.full_name}</td>
                    <td>{order.place}</td>
                    <td>{order.date_requested}</td>
                    <td><InputForm type='text' value={orderSelected.state} onChange={orderSelectedChangeValue} placeholder='State' name="state"/></td>
                    <td><InputForm type='number' value={orderSelected.count} onChange={orderSelectedChangeValue} placeholder='Count' name="count"/></td>
                    <td><InputForm type='text' value={orderSelected.brand} onChange={orderSelectedChangeValue} placeholder='Brand' name="brand"/></td>
                    <td>{order.date_collected}</td>
                    <td><ButtonForm onClick={()=>{updateOrderForm(orderSelected)}}><span className="material-symbols-outlined">
                    save
                    </span></ButtonForm></td>
                </tr>
                )}
            </tbody>
        </table>
        <ButtonForm onClick={()=>{}}><Link to="/Permissions">Go Back!</Link></ButtonForm>
    </div>
)}

export default OrdersPage;