import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStoredIngredient, INGREDIENTS, PORTIONING } from '../../data/ingredients';

export type FridgeState = {
    ingredients: IStoredIngredient[];
};

const initialState: FridgeState = {
    ingredients: [
        {
            ingredient: INGREDIENTS.get("apple")!,
            quantity: 5,
            portioned: PORTIONING.SLICEABLE
        },
        {
            ingredient: INGREDIENTS.get("bacon")!,
            quantity: 1,
            portioned: PORTIONING.CHOPPABLE
        }
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
