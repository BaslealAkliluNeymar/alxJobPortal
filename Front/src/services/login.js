import axios from 'axios'
const BASE_URL = 'http://localhost:8000/signup'
const BASE_URL_LOGIN = 'http://localhost:8000/login'



 
export const LoginPost = async (credential) =>{
    const response = await axios.post(BASE_URL_LOGIN,credential)
    return response.data
}

export const signup = async (credential) =>{
    const response = await axios.post(BASE_URL,credential)

    console.log(response.data)
    return response.data
}