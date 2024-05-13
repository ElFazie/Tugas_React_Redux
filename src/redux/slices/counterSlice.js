import { createSlice } from "@reduxjs/toolkit";

const initialSlate = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;