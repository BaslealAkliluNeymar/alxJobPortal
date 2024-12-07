import axios from 'axios'
const BASE_URL = 'http://localhost:8000/talent/search'
let token = `Bearer ${localStorage.getItem('token')}`

const config = {
    headers:{'Authorization' :token}
}


export const getSearchJobs = async (data) =>{
    const response = await axios.get(`http://localhost:8000/talent/search?position=${data.title}&location=${data.location}`,config)
    return response.data
}