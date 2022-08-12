// import { useState } from "react";
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/atom/button/buttonForm';
import Permissions  from '../modelsclass/permissions'
import decodeToken from '../services/decodeToken';
import { TitleStyle } from '../components/atom/title/title.Style';

function PermissionsVerificationPage(){
    
    const{
        permissionsValue
    } = decodeToken();

    return (
    <div>
      <TitleStyle>Choose the modification you want to do</TitleStyle>
      <h5>Those are your permissions</h5>
      {permissionsValue.includes(Permissions.read) && <ButtonForm onClick={()=>{}}><Link to="/getOrders">Get Orders</Link></ButtonForm>}
      {permissionsValue.includes(Permissions.delete) && <ButtonForm onClick={()=>{}}><Link to="/DeleteOrders">Delete Orders</Link></ButtonForm>}
      {permissionsValue.includes(Permissions.create) && <ButtonForm onClick = {async () => await {}}><Link to="/createOrder">Create an Order</Link></ButtonForm>}
      {permissionsValue.includes(Permissions.update) && <ButtonForm onClick = {async () => await {}}><Link to="/UpdateOrder">Update an Order</Link></ButtonForm>}
      <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
    </div>
    )
}

export default PermissionsVerificationPage;