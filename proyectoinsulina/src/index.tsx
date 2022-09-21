import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogInPage from './pages/logInPage';
import DeleteOrderPage from './pages/deleteOrder'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOrderPage from './pages/createOrder';
import UpdateOrderPage from './pages/updateOrder';
import PermissionsVerificationPage from './pages/modificationPage';
import OrdersPage from './pages/orders';

// Mantener el codigó con la misma identación (si es por 2 o por 4 espacios, respetarlo en todas partes)
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Mantener un standard en la separacion de simbolos valores y parametros
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage/>}></Route>
                <Route path="Permissions" element={<PermissionsVerificationPage/>}></Route>
                <Route path="getOrders" element={<OrdersPage/>}></Route>
                <Route path="createOrder" element={<CreateOrderPage/>}></Route>
                <Route path="UpdateOrder" element={<UpdateOrderPage/>}></Route>
                <Route path="DeleteOrders" element={<DeleteOrderPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

