// import { useState } from "react";
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/atom/button/buttonForm';
import Permissions  from '../modelsclass/permissionsTemplate'
import { GetOrders, DeleteOrders, CreateOrders } from '../services/insulineServices';

function ModificationPage (){
    // solo quiero traerme el token que almacene en el localstorage 
// necesito llamar los atributos del 
        const localValue = window.localStorage.getItem('access_token'); 
        const decodeValue:object = jwt_decode(localValue!)

        const permissionsValue: Array<string> = decodeValue.permissions

        const getPermission = async (token:string) => {
            if(permissionsValue.includes(Permissions.read)){
                await console.log(GetOrders(token))
            }else{
                console.log('vete!!!')
            }}
        
        const deletePermission = (id: string) => {
            if(permissionsValue.includes(Permissions.delete)){
                return DeleteOrders(localValue!,id)
            }
        }

        const createPermission = (
            token: string,
            id: string,
            cellphone: number,
            full_name: string,
            place: string,
            date_requested: Date,
            state: string,
            count: number, 
            brand: string,
            date_collected: null
        ) => {
            if(permissionsValue.includes(Permissions.create))
            return CreateOrders(
                token,
                id,
                cellphone,
                full_name,
                place,
                date_requested,
                state,
                count,
                brand,
                date_collected
            )
        }
    // crear los botones de acuerdo al tipo de permisos 
    return (
    <>
    <div>
      <h3>Choose the modification you want to do</h3>
      <h6>Those are your permissions</h6>
      <ButtonForm onClick={() => {getPermission(localValue!)}}> get Orders</ButtonForm>
      <ButtonForm onClick={async () => await {deletePermission}}>Delete Orders</ButtonForm>
      <ButtonForm onClick = {async () => await {createPermission}}>Create an Order </ButtonForm>
      <ButtonForm onClick={()=>{}}><Link to="/">LogIn Page</Link></ButtonForm>
      
    </div>
    </>   
    )
    
}

export default ModificationPage