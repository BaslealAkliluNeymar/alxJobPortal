import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { signup } from '../services/login'
import { LoginPost } from '../services/login'
const initialState = {
    user:{},
    token:"",
    isLoading:false,
    isAuthenticated:false,
    error:null
}

export const signupThunk = createAsyncThunk(
    'auth/signup',
    async (credential) =>{
        const response = await signup(credential)
        console.log(`This is from the thunk => ${response}`)
        return response
       
    }
)

export const login = createAsyncThunk(
    'auth/login',
     async (userData, { rejectWithValue }) =>{
        try {
            const response = await LoginPost(userData)
            localStorage.setItem('token',response.token)
            return response
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
            state.error = false
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
            state.token = action.payload.token
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