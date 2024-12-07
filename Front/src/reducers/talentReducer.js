import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getByCountry, getByRole, getFiltered, getProfile, getSingle } from "../services/talents";

const initialState = {
    talent: [],
    isPending: false,
    error: false,
};


export const talentThunk = createAsyncThunk('talent/getAll', async () => await getAll());
export const talentgetbyCountry = createAsyncThunk('talent/getbyCountry', async (country) => await getByCountry(country));
export const talentbyrole = createAsyncThunk('talent/getbyRole', async (role) => await getByRole(role));
export const talentSingle = createAsyncThunk('talent/getSingle', async (id) => await getSingle(id));
export const talentFiltered = createAsyncThunk('talent/getFiltered', async (data) => await getFiltered(data));
export const talentProfile = createAsyncThunk('talent/getProfile', async (data) => await getProfile(data));


const handleAsyncThunk = (builder, thunk, onFulfilled = (state, action) => { state.talent = action.payload; }) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.isPending = true;
            state.error = false;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            onFulfilled(state, action);
            state.isPending = false;
            state.error = false;
        })
        .addCase(thunk.rejected, (state) => {
            state.isPending = false;
            state.error = true;
        });
};

// Slice Definition
const talentSlice = createSlice({
    name: "talent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncThunk(builder, talentThunk);
        handleAsyncThunk(builder, talentgetbyCountry);
        handleAsyncThunk(builder, talentbyrole);
        handleAsyncThunk(builder, talentSingle, (state, action) => { state.talent = [action.payload]; }); // Custom Fulfillment
        handleAsyncThunk(builder, talentFiltered);
        handleAsyncThunk(builder, talentProfile);
    },
});

export default talentSlice.reducer;
