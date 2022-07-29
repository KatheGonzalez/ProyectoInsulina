// import { useState } from "react";
import jwt_decode from 'jwt-decode';
import Permissions  from '../modelsclass/permissionsTemplate'
import { GetOrders, DeleteOrders, CreateOrders } from '../services/insulineServices';

function ModificationPage (){
    // solo quiero traerme el token que almacene en el localstorage 
// necesito llamar los atributos del 
        const localValue = window.localStorage.getItem('access_token'); 
        const decodeValue:object = jwt_decode(localValue!)

        console.log('este es el codigo decodificado')
        console.log(decodeValue)

        const permissionsValue: Array<string> = decodeValue.permissions
        console.log('debes tener el array de los permisos')
        console.log(permissionsValue)

        const getPermission = () => {
            if(permissionsValue.includes(Permissions.read)){
                console.log('tienes permiso para leer')
                return GetOrders(localValue!)
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
      <button onClick={async () => await {getPermission}}> get Orders</button>
      <button onClick={async () => await {deletePermission}}>Delete Orders</button>
      <button onClick = {async () => await {createPermission}}>Create Permissions </button>

      <h3>Modification page yuujuuu  !!!!!!</h3>
    </div>
    </>   
    )
    
}

export default ModificationPage