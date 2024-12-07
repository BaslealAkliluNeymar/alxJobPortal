import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJobs } from '../services/jobs.js'
const initialState = {
    jobs:[],
    searchResult:[],
    ispending:false
}

export const jobAsyncThunk = createAsyncThunk(
    'job/get',
    async () => {
        const jobs = await getJobs()
        return jobs
    }
)
export const jobSearchThunk = createAsyncThunk(
    'job/search',
    async () =>{
        const searchResult = await getSearchJobs()
        return searchResult
    }
)


const handleAsyncThunk = (builder, thunk , onFullfilled) =>{
    builder
        .addCase(thunk.pending, (state) =>{
            state.ispending = true
        })
        .addCase(thunk.rejected, (state) =>{
            state.ispending = false
            state.jobs = []
        })
        .addCase(thunk.fulfilled,(state,action) =>{
            state.ispending = false
            onFullfilled(state, action)
        })
}
const jobSlice = createSlice({
    name:'job',
    initialState,
    reducer:{
        addJob:(state, action) =>{
            state.jobs.push(action.payload)
        }
    },
    extraReducers: (builder) =>{
        handleAsyncThunk(builder, jobAsyncThunk, (state,{payload}) =>{
            state.ispending = false
            state.searchResult = [...payload]
        })
        handleAsyncThunk(builder, jobSearchThunk,(state,{payload}) =>{
            state.ispending = false
            state.searchResult = [...payload]
        })
    }
})


export const { addJob } = jobSlice.actions
export default jobSlice.reducer