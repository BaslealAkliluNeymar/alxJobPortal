import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getByCountry, getByRole, getFiltered, getProfile, getSingle } from "../services/talents";

const initialState = {
    talent:[],
    isPending:false,
    error:false
}
export const talentThunk = createAsyncThunk(
    'talent/getAll',
    async () =>{
        const response = await getAll()
        return response
    }
)

export const talentgetbyCountry = createAsyncThunk(
    'talent/getbyCountry',
    async (country) =>{
        const response = await getByCountry(country)
        return response
    }
)

export const talentbyrole = createAsyncThunk(
    'talent/getbyRole',
    async (role) =>{
        const response = await getByRole(role)
        return response
    }
)
export const talentSingle = createAsyncThunk(
    'talent/getSingle',
    async (id) =>{
        const response = await getSingle(id)
        return response
    }
)
export const talentFiltered = createAsyncThunk(
    'talent/getFiltered',
    async (data) =>{
        const response = await getFiltered(data)
        return response
    }
)

export const talentProfile = createAsyncThunk(
    'talent/getProfile',
    async (data) =>{
        const response = await getProfile(data)
        return response
    }
)


const talentSlice = createSlice({
    name:"talent",
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
            .addCase(talentThunk.pending,(state) =>{
                state.isPending = true
                state.error = false
            })
            .addCase(talentThunk.fulfilled,(state,action) =>{
                state.talent = action.payload
                state.isPending = false
                state.error = false
            })
            .addCase(talentThunk.rejected,(state) =>{
                state.isPending = false
                state.error = true
            })
    }
})


export default talentSlice.reducer
