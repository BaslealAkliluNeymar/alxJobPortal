import axios from 'axios'
const BASE_URL = 'http://localhost:8000/jobs'

let token = `Bearer ${localStorage.getItem('token')}`
const config = {
    headers:{'Authorization' :token}
}

export const getJobs = async () =>{
    const response = await axios.get('http://localhost:8000/jobs',config)
    return response.data
}

export const saveJob = async (data) =>{

    const response = await axios.post(`http://localhost:8000/admin/jobs`,data,config)
    return response.data
}

export const getUserJobs = async () =>{
    const response = await axios.get(`http://localhost:8000/admin/jobs`,config)
    return response.data
}


export const ApplyJob = async (id) =>{
    const response = await axios.post(`http://localhost:8000/jobs/${id}/apply`,{},config)
    return response.data
}


export const Analytics = async () =>{
    const response = await axios.get(`http://localhost:8000/admin/dashboard`,config)
    return response.data
}
