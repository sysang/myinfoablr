import { configureStore } from '@reduxjs/toolkit';
import myinfoSlice from '../pages/Myinfo/slice';

export const store = configureStore({
    reducer: {
        myinfo: myinfoSlice
    }
})
