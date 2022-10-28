import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getMyinfo } from '../../api/myinfo'

const initialState = {
    isLoading: false,
}

export const fetchInfo = createAsyncThunk(
    'myinfo/fetchInfo',
    async (code: String) => {
        const response = await getMyinfo(code)
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
            .addCase(fetchInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action)
                for (let field in action.payload) {
                    //@ts-ignore
                    state[field] = action.payload[field]
                }
            });
    },
})

export const { setInfo } = myinfoSlice.actions;

export default myinfoSlice.reducer;
