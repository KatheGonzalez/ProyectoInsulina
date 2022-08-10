import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateOrder } from '../modelsclass/createOrder';
import { LogIn } from '../modelsclass/login';

// LOGIN REQUEST  -- VERIFICADO

export const LoginUser: (user:LogIn) => Promise<any> = (user:LogIn) => {
    const body = {
            username: user.user,
            password: user.password
    }
    return axios.post<{access_token:string}>(`/users/login`, body)
        .then(response => response.data.access_token)
        .catch(error => error.response.status)
}

// GET ORDER REQUEST -- VERIFICADO

export const GetOrders = (token:string) => { 
    const config = {
            headers: { 
                Authorization: `Bearer ${token}`}
    };
    return axios.get('/orders', config) 
    .then(response => response.data.data)
}

// DELETE ORDER REQUEST 

export const DeleteOrders = (token: string, deleteOrder: CreateOrder) => {
    const config = {
            headers: { Authorization: `Bearer ${token}`}
    }
    return axios.put('/orders/delete', deleteOrder, config)
    .then(response => response.data.data.message)
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

export const UpdateOrders = (token: string, updateOrder: CreateOrder) => {
    const config =  {
        headers : { Authorization: `Bearer ${token}`}
    }
    return axios.put('/orders/update', updateOrder, config)
    .then(response => console.log(response))
}


