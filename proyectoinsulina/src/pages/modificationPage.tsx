// import { useState } from "react";
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/atom/button/buttonForm';
import { CardForm } from '../components/atom/card/cardForm';
import { LoginInfo } from '../components/atom/divStylesLogin/backgroundOne.Style';
import Permissions  from '../modelsclass/permissions';
import decodeToken from '../services/decodeToken';
import img from '../assets/images/icons/medicine.svg';
import img2 from '../assets/images/icons/weather.svg';
import img3 from '../assets/images/icons/location.svg';


function PermissionsVerificationPage(){
    
    const{
        permissionsValue
    } = decodeToken();

    return (
        <>
          {permissionsValue.includes(Permissions.read) && <Link to="/getOrders">
            <CardForm 
                title='Ver Solicitudes' 
                text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                img={img}
                rotate={330}
            /></Link>}
          {permissionsValue.includes(Permissions.delete) && <Link to="/DeleteOrders">
            <CardForm 
                    title='Eliminar Solicitudes' 
                    text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                    img={img2}
                    rotate={330}
                />
            </Link>}
          {permissionsValue.includes(Permissions.create) && <Link to="/createOrder">
            <CardForm 
                    title='Crear Solicitudes' 
                    text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                    img={img3}
                    rotate={330}
                />
            </Link>}
          {permissionsValue.includes(Permissions.update) && <Link to="/UpdateOrder">
            <CardForm 
                        title='Escoger Solicitudes' 
                        text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                        img={img}
                        rotate={330}
                    />
            </Link>}
          <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
        </>
    )
}

export default PermissionsVerificationPage;