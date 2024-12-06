import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJobs } from '../services/search'
const initialState = {
    jobs:[],
    ispending:false
}

export const jobAsyncThunk = createAsyncThunk(
    'job/get',
    async () =>{
        const jobs = await getJobs()
        return jobs
    }
)

const jobSlice = createSlice({
    name:'job',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(jobAsyncThunk.pending,(state) =>{
            state.ispending = true
        })
        .addCase(jobAsyncThunk.fulfilled,(state,action) =>{
            state.ispending = false
            state.jobs = state.jobs.concat(action.payload)
        })
        .addCase(jobAsyncThunk.rejected,(state) =>{
            state.ispending = false
            state.jobs = []
        })
    }
})

// export const {} = autoSlice.actions

export default jobSlice.reducer