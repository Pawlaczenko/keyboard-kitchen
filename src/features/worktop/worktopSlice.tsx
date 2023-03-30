import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStoredIngredient, INGREDIENTS } from '../../data/ingredients';

export type WorktopState = IStoredIngredient[];

const initialState: WorktopState = [
    {
        ingredient: INGREDIENTS.get("pasta")!,
        quantity: 125,
    },
    {
        ingredient: INGREDIENTS.get("water")!,
        quantity: 10,
    },
];

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