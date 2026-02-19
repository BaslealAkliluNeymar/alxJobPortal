import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Analytics, getUserJobs, saveJob } from "../services/jobs";
import { addJob } from "./jobReducer";
import { dispatch } from "@reduxjs/toolkit";

const initialState = {
    adminDetails: {},
    analytics: {},
    loading: false,
    error: false
}

export const saveJobThunk = createAsyncThunk(
    'admin/savejob',
    async (credential, rejectWithValue) => {
        try {
            const saved = await saveJob(credential)
            dispatch(addJob(saved))
            return saved
        }
        catch (error) {
            rejectWithValue(error)
        }
    }
)

export const getUserJobsThunk = createAsyncThunk(
    'admin/getUserJobs',
    async () => {
        const jobs = await getUserJobs()
        return jobs
    }
)

export const analyticsThunk = createAsyncThunk(
    'admin/analytics',
    async () => {
        const response = await Analytics()
        return response
    }
)


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducer: {
        updateadmin: (action) => {
            state.jobs.push(action.payload)
            dispatch(addJob(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserJobsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserJobsThunk.fulfilled, (state, action) => {
                state.adminDetails = action.payload
                state.loading = false
            })
            .addCase(getUserJobsThunk.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(analyticsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(analyticsThunk.fulfilled, (state, action) => {
                state.analytics = action.payload
                state.loading = false
            })
            .addCase(analyticsThunk.rejected, (state) => {
                state.loading = false
                state.error = true
            })

    }
})

export const { updateadmin } = adminSlice.actions
export default adminSlice.reducer