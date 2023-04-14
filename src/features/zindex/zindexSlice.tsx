import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IZIndexState {
    zindex: number
}
const initialState: IZIndexState = {
    zindex: 1
};

export const zindexSlice = createSlice({
    name: "zindex",
    initialState,
    reducers: {
        increaseHighestZIndex: (state, action: PayloadAction<number>) => {
            state.zindex = action.payload;
        },
    },
});

export const { increaseHighestZIndex} = zindexSlice.actions;
export default zindexSlice.reducer;
