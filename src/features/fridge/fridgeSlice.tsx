import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStoredIngredient, INGREDIENTS } from '../../data/ingredients';

export type FridgeState = {
    ingredients: IStoredIngredient[];
};

const initialState: FridgeState = {
    ingredients: [
        {
            ingredient: INGREDIENTS.get("egg")!,
            quantity: 4,
        },
    ]
};

export const fridgeSlice = createSlice({
    name: "fridge",
    initialState,
    reducers: {
        fill: (state, action: PayloadAction<IStoredIngredient[]>) => {
            state.ingredients.push(...action.payload);
        }
    },
});

export const { fill } = fridgeSlice.actions;
export default fridgeSlice.reducer;
