import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJobs } from '../services/jobs.js'
const initialState = {
    jobs:[],
    ispending:false
}

export const jobAsyncThunk = createAsyncThunk(
    'job/get',
    async () => {
        const jobs = await getJobs()
        return jobs
    }
)

const jobSlice = createSlice({
    name:'job',
    initialState,
    reducer:{
        addJob:(state, action) =>{
            state.jobs.push(action.payload)
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(jobAsyncThunk.pending,(state) =>{
            state.ispending = true
        })
        .addCase(jobAsyncThunk.fulfilled,(state,{payload}) =>{
            state.ispending = false
            state.jobs = [...payload]
        })
        .addCase(jobAsyncThunk.rejected,(state) =>{
            state.ispending = false
            state.jobs = []
        })
    }
})


export const { addJob } = jobSlice.actions
export default jobSlice.reducer