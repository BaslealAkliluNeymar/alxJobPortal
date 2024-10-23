import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent'
let token = ''

export const setToken = (signature) =>{
    console.log(signature)
    token =`Bearer ${signature}`
}



export const getAll = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get(BASE_URL,config)
    console.log(response)
    return response.data
}


export const getByRole = async (role) =>{
    const response = await axios.get('/role',config)
    return response.data
}


export const getSingle = async (id) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const newUrl = BASE_URL + `/${id}`
    const response = await axios.get(newUrl,config)
    return response.data
}
