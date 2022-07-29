import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogInPage from './pages/logInPage';
import ModificationPage from './pages/modificationPage';
import PermissionPage from './pages/permissionPage';
import OrdersPage from './pages/ordersPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LogInPage/>}></Route>
        <Route path="Modification" element={<ModificationPage/>}></Route>
        <Route path="Orders" element = {<OrdersPage/>}></Route>
        <Route path="Permissions" element = {<PermissionPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

