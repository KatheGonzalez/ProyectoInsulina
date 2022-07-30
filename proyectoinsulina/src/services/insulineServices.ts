import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateOrder } from '../modelsclass/createTemplate';
import { DeleteOrder } from '../modelsclass/deleteTemplate';
import { UpdateOrder } from '../modelsclass/updateTemplate';

// const API = 'http://localhost:2000';

// LOGIN REQUEST  -- VERIFICADO

export const LogInUser: (username:string, password: string) => Promise<string> = (username:string, password: string) => {
    const body = {
            username: username,
            password: password
    }
    return axios.post<{access_token:string}>(`/users/login`, body)
        .then(response => response.data.access_token)
}

// GET ORDER REQUEST -- VERIFICADO

export const GetOrders = (token:string) => { 
    const config = {
            headers: { 
                Authorization: `Bearer ${token}`}
    };
    return axios.get('/orders', config) 
    .then(response => console.log(response))
}

// DELETE ORDER REQUEST 

export const DeleteOrders = (token: string, deleteOrder: DeleteOrder) => {
    const config = {
            headers: { Authorization: `Bearer ${token}`}
    }
    return axios.put('/orders/delete', deleteOrder, config)
    .then(response => console.log(response))
}

// CREATE ORDER REQUEST

type response = {
    data:any,
    notification:any
}

export const CreateOrders = ( token: string, newOrder: CreateOrder ) => {
    const config: AxiosRequestConfig<CreateOrder> = {
        headers : { Authorization: `Bearer ${token}` },
    }
    return axios.post<response, AxiosResponse<response>, CreateOrder>('/orders', newOrder, config) 
    .then(response => response.data.data.message)
}

// UPDATE ORDER REQUEST

export const UpdateOrders = (token: string, updateOrder:UpdateOrder) => {
    const config =  {
        headers : { Authorization: `Bearer ${token}`}
    }
    return axios.put('/orders/update', updateOrder, config)
    .then(response => console.log(response))
}


