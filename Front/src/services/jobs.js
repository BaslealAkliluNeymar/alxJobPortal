import axios from 'axios'
const BASE_URL = 'http://localhost:8000/jobs'


export const getJobs = async () =>{
    const response = await axios.get(BASE_URL)

    console.log(response)
    return response.data
}