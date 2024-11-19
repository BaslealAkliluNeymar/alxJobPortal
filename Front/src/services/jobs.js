import axios from 'axios'
const BASE_URL = 'http://localhost:8000/jobs'

let token = ''
export const setToken = (signature) =>{
    token =`Bearer ${signature}`
}



export const getJobs = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get('http://localhost:8000/jobs',config)
    console.log(response)
    return response.data
}

export const saveJob = async (data) =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.post(`http://localhost:8000/admin/jobs`,data,config)
    return response.data
}

export const getUserJobs = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    const response = await axios.get(`http://localhost:8000/admin/jobs`,config)

    return response.data
}


export const ApplyJob = async (id) =>{
    const config = {
        headers:{'Authorization' :token}
    }

    console.log(id)

    console.log(config)
    
    const response = await axios.post(`http://localhost:8000/jobs/${id}/apply`,{},config)

    return response.data
}


export const Analytics = async () =>{
    const config = {
        headers:{'Authorization' :token}
    }
    
    const response = await axios.get(`http://localhost:8000/admin/dashboard`,config)

    console.log(response)
    return response.data
}
