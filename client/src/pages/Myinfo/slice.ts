import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
}

export const myinfoSlice = createSlice({
    name: 'myinfo',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            console.log(action)
            for (let field in action.payload) {
                //@ts-ignore
                state[field] = action.payload[field]
            }
        }
    }
})

export const { setInfo } = myinfoSlice.actions;

export default myinfoSlice.reducer;
