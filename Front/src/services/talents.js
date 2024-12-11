import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent'
let token = `Bearer ${localStorage.getItem('token')}`
const config = {
    headers:{'Authorization' :token}
}

export const getAll = async () =>{
    const response = await axios.get(BASE_URL,config)
    return response.data
}

export const getByCountry = async (country) =>{
    const response = await axios.get(`${BASE_URL}/search?country=${country}`,config)
    return response.data
}


export const getByRole = async (role) =>{
    const response = await axios.get(`${BASE_URL}/search/position=${role}`,config)
    return response.data
}


export const getSingle = async (id) => {
    const response = await axios.get(`http://localhost:8000/talent/${id}`,config)
    return response.data[0]
}


export const getFiltered = async (data) =>{
    const response = await axios.post(`${BASE_URL}/search`,data,config)
    return response.data
}

export const getProfile = async (data) =>{
    //change data to formdata
    const frorm = new FormData(data)
    const response = await axios.post(BASE_URL,frorm,{
        headers:{
            'Authorization' :token,
            'Content-Type':'multipart/form-data'
        }
    })
    return response.data
}

