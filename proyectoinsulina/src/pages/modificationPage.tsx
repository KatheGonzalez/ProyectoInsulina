// import { useState } from "react";
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/atom/button/buttonForm';
import { CardForm } from '../components/atom/card/cardForm';
import { LoginInfo } from '../components/atom/divStyles/backgroundOne.Style';
import Permissions  from '../modelsclass/permissions';
import decodeToken from '../services/decodeToken';
import img from '../assets/images/icons/medicine.svg';


function PermissionsVerificationPage(){
    
    const{
        permissionsValue
    } = decodeToken();

    return (
        <>
          {permissionsValue.includes(Permissions.read) && <Link to="/getOrders">
            <CardForm 
                title='Crear Solicitudes' 
                text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                img={img}
                rotate={330}
            /></Link>
        //   {permissionsValue.includes(Permissions.delete) && <Link to="/DeleteOrders">Delete Orders</Link>
        //   {permissionsValue.includes(Permissions.create) && <Link to="/createOrder">Create an Order</Link>
        //   {permissionsValue.includes(Permissions.update) && <Link to="/UpdateOrder">Update an Order</Link>
        //   <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
    }
        </>
    )
}

export default PermissionsVerificationPage;