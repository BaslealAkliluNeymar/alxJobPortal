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
    
    return response.data
}


export const getByCountry = async (country) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get(`${BASE_URL}/search?country=${country}`,config)
    return response.data
}


export const getByRole = async (role) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get(`${BASE_URL}/search/position=${role}`,config)
    return response.data
}


export const getSingle = async (id) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const newUrl = BASE_URL + `/${id}`
    const response = await axios.get(newUrl,config)
   
    return response.data[0]
}


export const getFiltered = async (data) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    console.log(data)

    const response = await axios.post(`${BASE_URL}/search`,data,config)
    return response.data
}

