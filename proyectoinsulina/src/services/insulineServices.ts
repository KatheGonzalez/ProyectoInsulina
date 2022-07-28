import axios from 'axios';

// const API = 'http://localhost:2000';

export const LogInUser: (username:string, password: string) => Promise<string> = (username:string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    return axios.post<{access_token:string}>(`/users/login`, body)
        .then(response => response.data.access_token)
    // .then(response => (jwt_decode(response.data.access_token)))
}

export const GetOrders = () => { 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGVybWlzc2lvbnMiOlsiaW5zdWxpbl9hcHA6cmVhZF9vcmRlcnMiLCJpbnN1bGluX2FwcDpkZWxldGVfb3JkZXJzIl0sImlhdCI6MTY1ODg4NTk1MSwiZXhwIjoxNjU4ODkxOTUxfQ.14Cd7-FSbzH5PyLzbd5wk_D8N4ozlc2raspxYOm6mfY';
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get('/orders', config) 
    .then(response => console.log(response))
}


// export const CreateOrders = ({
//     dni: 1032488869,
//             cellphone: 3004088683,
//             full_name: "Kathe Gonzalez",
//             place: "Cra 123 Calle no papito sur",
//             date_requested: "25/07/2022",
//             state: "CREATED",
//             count: 52,
//             brand: "Apidra",
//             date_collected: null
// }) => {
//     const body = {
        
//             dni: 1032488869,
//             cellphone: 3004088683,
//             full_name: "Kathe Gonzalez",
//             place: "Cra 123 Calle no papito sur",
//             date_requested: "25/07/2022",
//             state: "CREATED",
//             count: 52,
//             brand: "Apidra",
//             date_collected: null
//         }
//     return axios.post('/orders', body)
//     .then(response => console.log(response))
// }

// export const UpdateOrders = () => {

// }
