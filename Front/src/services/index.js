import axios from "axios"
const BASE_URL = `https://jsonplaceholder.typicode.com/users`
const token = ''

export const getAll = async () =>{
    const config = {
        headers: token
    }
    const response = await axios.get(BASE_URL)
    return response.data
}


