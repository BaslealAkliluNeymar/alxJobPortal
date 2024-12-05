import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user:{},
    token:null,
    isLoading:false,
    isAuthenticated:false,
    error:null
}

export const signupThunk = createAsyncThunk(
    'auth/signupThunk',
    async (credential, { rejectWithValue }) =>{
        try
        {
           const response = await axios.post('http://localhost:8000/signup',credential)
           console.log(`This is from the Thunk => ${response.data}`)
           return response.data
        }
        catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
     async (userData, {rejectWithValue}) =>{
        try {
            const response = await axios.post('http://localhost:8000/login',userData)
            return response.data
        }
        catch(error){
            return rejectWithValue(error)
        }
    }
)



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducer:{
        logout(state){
            state.user = null
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(signupThunk.pending, (state) =>{
            state.isLoading = true
            state.error = error
        })
        .addCase(signupThunk.fulfilled, (state,action) =>{
            state.user = action.payload.user,
            state.isLoading = false
            state.error = null
        })
        .addCase(signupThunk.rejected,(state) =>{
            state.isLoading = false
            state.error = true
        })

        .addCase(login.pending,(state) =>{
            state.isLoading = true
            state.error = null
        })

        .addCase(login.fulfilled,(state,action)=>{
            state.isAuthenticated = true
            state.user = action.payload.user
            state.isLoading = false
        })
        .addCase(login.rejected,(state) =>{
            state.error = true
            state.isLoading = false
            state.isAuthenticated = false

        })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer