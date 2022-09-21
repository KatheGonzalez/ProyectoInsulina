import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateOrder } from '../modelsclass/createOrder';
import { LogIn } from '../modelsclass/login';

type LoginResponseProps = { access_token: string };

// LOGIN REQUEST  -- VERIFICADO
// Si esto es un servicio de insulinas especificamente (insulineService) porque hay una funcion de login?
// tipo deberia ser string o number por el then o el catch
export const LoginUser: (user: LogIn) => Promise<string | number> = (user: LogIn) => {
    const body = {
        username: user.user,
        password: user.password
    }
    // El tipo puede ir afuera para mejor organización del código
    return axios.post<LoginResponseProps>(`/users/login`, body)
        // Esto retorna Access_token que es un string, por lo tanto, no debe ser ANY
        .then(response => response.data.access_token)
        .catch(error => error.response.status)
}

// GET ORDER REQUEST -- VERIFICADO

// Codigo externalizado:
const config: (token: string) => AxiosRequestConfig = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

// Y aquí cual es el typo?
export const GetOrders: (token: string) => Promise<CreateOrder[]> = (token: string) => {
    // Organizar identado y organizacion de codigo, si se usa muchas veces un codigo mejor externalizarlo
    return axios.get('/orders', config(token))
        .then(response => response.data.data)
}

// CREATE ORDER REQUEST -- VERIFICADO

// No ANY mamitaa
type response = {
    data: any,
    notification: any
}

export const CreateOrders = (token: string, newOrder: CreateOrder) => {
    // Mucha repetición de codigo, se puede externalizar el config para no llamarlo en cada uno
    return axios.post<response, AxiosResponse<response>, CreateOrder>('/orders', newOrder, config(token))
        .then(response => response.data.notification.description)
}

// DELETE ORDER REQUEST -- VERIFICADO

export const DeleteOrders = (token: string, deleteOrder: CreateOrder) => {
    return axios.put('/orders/delete', deleteOrder, config(token))
        .then(response => response.data.notification.description)
}


// UPDATE ORDER REQUEST -- VERIFICADO

export const UpdateOrders = (token: string, updateOrder: CreateOrder) => {
    return axios.put('/orders/update', updateOrder, config(token))
        .then(response => response.data.notification.description)
}
