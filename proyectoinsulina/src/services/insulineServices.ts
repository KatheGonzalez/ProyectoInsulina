import axios from 'axios';

// const API = 'http://localhost:2000';

// LOGIN REQUEST

export const LogInUser: (username:string, password: string) => Promise<string> = (username:string, password: string) => {
    const body = {
            username: username,
            password: password
    }
    return axios.post<{access_token:string}>(`/users/login`, body)
        .then(response => response.data.access_token)
    // .then(response => (jwt_decode(response.data.access_token)))
}

// GET ORDER REQUEST 

export const GetOrders = (token:string) => { 
    const config = {
            headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get('/orders', config) 
    .then(response => console.log(response))
}

// DELETE ORDER REQUEST

export const DeleteOrders = (token: string, id: string) => {
    const config = {
            body : {id : id},
            headers: { Authorization: `Bearer ${token}`}
    }
    return axios.delete('/orders/delete', config)
    .then(response => console.log(response))
}

// CREATE ORDER REQUEST

export const CreateOrders = (
            token: string,
            id: string,
            cellphone: number,
            full_name: string,
            place: string,
            date_requested: Date,
            state: string,
            count: number, 
            brand: string,
            date_collected: null) => {

    const config = {
        body : {
            id: id,
            cellphone: cellphone,
            full_name: full_name,
            place: place,
            date_requested: date_requested,
            state: state,
            count: count, 
            brand: brand,
            date_collected: date_collected
        },

        headers : { Authorization: `Bearer ${token}` }
    }
    return axios.post('/orders', config)
    .then(response => console.log(response))
}

// UPDATE ORDER REQUEST

export const UpdateOrders = (
            token: string,
            id: string,
            count: number,
            state: number,
            brand: string,
            data_collected: Date
) => {
    const config =  {
        body : {
            token: token,
            id: id,
            count: count,
            state: state,
            brand: brand,
            data_collected: data_collected
        },
        headers : { Authorization: `Bearer ${token}`}
    }

    return axios.put('/orders/update', config)
    .then(response => console.log(response))
}


