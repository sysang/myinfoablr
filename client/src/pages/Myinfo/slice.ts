import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { login } from '../../api/auth'

const initialState = {
    isLoading: false,
    isLoaded: false,
    isError: false,
}

export const requestLogin = createAsyncThunk(
    'myinfo/requestLogin',
    async (code: String) => {
        const response = await login(code)
        return response
    }
);

export const myinfoSlice = createSlice({
    name: 'myinfo',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            for (let field in action.payload) {
                //@ts-ignore
                state[field] = action.payload[field]
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(requestLogin.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isLoaded = true;
            })
            .addCase(requestLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoaded = true;
                for (let field in action.payload) {
                    //@ts-ignore
                    state[field] = action.payload[field]
                }
            });
    },
})

export const { setInfo } = myinfoSlice.actions;

export default myinfoSlice.reducer;
