import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent/search'
let token = ''

export const setToken = (signature) =>{
    console.log(signature)
    token =`Bearer ${signature}`
}


export const getJobs = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get('http://localhost:8000/talent/search?position=Software Engineer',config)

    console.log(response)
    return response.data
}