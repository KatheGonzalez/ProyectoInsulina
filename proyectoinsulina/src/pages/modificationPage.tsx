// import { useState } from "react";
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/atom/button/buttonForm';
import { Decode } from '../modelsclass/loginTemplate';
import Permissions  from '../modelsclass/permissionsTemplate'
import { GetOrders } from '../services/insulineServices';

function ModificationPage(){

        const localValue = window.localStorage.getItem('access_token'); 
        const decodeValue: Decode = jwt_decode<Decode>(localValue!)
        const permissionsValue: Array<string> = decodeValue.permissions 
        
        console.log(localValue)
    
        const getPermission = async (token:string) => {
            if(permissionsValue.includes(Permissions.read)){
                return await GetOrders(token)
            }else{
                console.log('vete!!!')
            }}

    return (
    <>
    <div>
      <h3>Choose the modification you want to do</h3>
      <h6>Those are your permissions</h6>
      <ButtonForm onClick={() => {getPermission(localValue!)}}> get Orders</ButtonForm>
      <ButtonForm onClick={()=>{}}><Link to="/Delete">Delete Orders</Link></ButtonForm>
      <ButtonForm onClick = {async () => await {}}><Link to="/Orders">Create an Order</Link></ButtonForm>
      <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
    </div>
    </>   
    )
    
}

export default ModificationPage