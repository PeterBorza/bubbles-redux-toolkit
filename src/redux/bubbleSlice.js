import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "bubble",
    initialState: {
        left: 0,
        top: 0,
        size: 0,
        opacity: 0,
        id: 1,
    },

    reducers: {
        create: {
            reducer: (state, { payload }) => {
                state.push(payload);
            },
            prepare: ({ left, top, size, opacity }) => ({
                payload: {
                    left,
                    top,
                    size,
                    opacity,
                    id: 2,
                },
            }),
        },
    },
});

// Action creators are generated for each case reducer function
export const { create } = counterSlice.actions;

export default counterSlice.reducer;
