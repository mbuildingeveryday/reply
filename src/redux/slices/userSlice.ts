import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    user: { name: string }
}

const initialState: typeInitialState = {
    user: { name: '익준' }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;