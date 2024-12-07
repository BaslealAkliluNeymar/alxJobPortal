import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getUserJobs, saveJob } from "../services/jobs";
import { addJob } from "./jobReducer";
import { dispatch } from "d3";

const initialState = {
    adminDetails:[],
    loading:false,
    error:false
}
export const saveJobThunk = createAsyncThunk(
    'admin/savejob',
    async (credential,rejectWithValue) =>{
        try{
            const saved = await saveJob(credential)
            dispatch(addJob(saved))
            return saved 
        }
        catch(error){
            rejectWithValue(error)
        }
    }
)

export const getUserJobsThunk = createAsyncThunk(
    'admin/getUserJobs',
    async() =>{
        const jobs = await getUserJobs()
        return jobs
    }
)


const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducer:{
        updateadmin:(action)=>{
            state.jobs.push(action.payload)
            dispatch(addJob(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUserJobsThunk.pending,(state) =>{
            state.loading = true
        })
        .addCase(getUserJobsThunk.fulfilled,(state,action) =>{
            state.adminDetails = action.payload
        })
        .addCase(getUserJobsThunk.rejected, (state) =>{
            state.loading = false
            state.error = true
        })
    }
})

export const  { updateadmin }  = adminSlice.actions
export default adminSlice.reducer