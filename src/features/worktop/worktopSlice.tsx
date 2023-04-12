import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStoredIngredient, INGREDIENTS } from '../../data/ingredients';

export type WorktopState = IStoredIngredient[];

const initialState: WorktopState = [];

export const worktopSlice = createSlice({
    name: "worktop",
    initialState,
    reducers: {
        fill: (state, action: PayloadAction<IStoredIngredient[]>) => {
            state.push(...action.payload);
        }
    }
});

export const {fill} = worktopSlice.actions;
export default worktopSlice.reducer;