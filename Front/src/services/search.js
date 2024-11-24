import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent/search'
let token = ''

export const setToken = (signature) =>{
    token =`Bearer ${signature}`
}


export const getJobs = async (data) =>{
    console.log(data)
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get(`http://localhost:8000/talent/search?position=${data.title}&location=${data.location}`,config)
    return response.data
}