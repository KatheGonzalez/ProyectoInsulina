import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogInPage from './pages/logInPage';
import DeleteOrderPage from './pages/deleteOrder'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateOrderPage from './pages/createOrder';
import UpdateOrderPage from './pages/updateOrder';
import PermissionsVerificationPage from './pages/modificationPage';
import OrdersPage from './pages/orders';
import { BackgroundOne } from './components/atom/divStyles/backgroundOne.Style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <BackgroundOne>
          <Routes>
              <Route path="/" element = {<LogInPage/>}></Route>
              <Route path="Permissions" element={<PermissionsVerificationPage/>}></Route>
              <Route path="getOrders" element={<OrdersPage/>}></Route>
              <Route path="createOrder" element = {<CreateOrderPage/>}></Route>
              <Route path="UpdateOrder" element = {<UpdateOrderPage/>}></Route>
              <Route path="DeleteOrders" element = {<DeleteOrderPage/>}></Route>
          </Routes> 
        </BackgroundOne>
    </BrowserRouter>
  </React.StrictMode>
);

