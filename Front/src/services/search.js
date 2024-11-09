import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent/search'
let token = ''

export const setToken = (signature) =>{
    token =`Bearer ${signature}`
}


export const getJobs = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get('http://localhost:8000/talent/search?position=Software Engineer',config)

    return response.data
}