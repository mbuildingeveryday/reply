import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    name: string
}

const initialState = {
    name: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;