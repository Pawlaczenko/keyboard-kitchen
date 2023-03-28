import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStoredIngredient, INGREDIENTS, PORTIONING } from '../../data/ingredients';

export type FridgeState = IStoredIngredient[];

const initialState: FridgeState = [
    {
        ingredient: INGREDIENTS.get("apple")!,
        quantity: 4,
    },
    {
        ingredient: INGREDIENTS.get("apple")!,
        quantity: 2,
        portioned: PORTIONING.SLICEABLE
    },
    {
        ingredient: INGREDIENTS.get("egg")!,
        quantity: 1,
    },
    {
        ingredient: INGREDIENTS.get("pepper")!,
        quantity: 5,
    },
    {
        ingredient: INGREDIENTS.get("salt")!,
        quantity: 10,
    },
    {
        ingredient: INGREDIENTS.get("flour")!,
        quantity: 200,
    },
    {
        ingredient: INGREDIENTS.get("milk")!,
        quantity: 4,
    },
    {
        ingredient: INGREDIENTS.get("pasta")!,
        quantity: 125,
    },
    {
        ingredient: INGREDIENTS.get("water")!,
        quantity: 10,
    },
];

export const fridgeSlice = createSlice({
    name: "fridge",
    initialState,
    reducers: {
        fill: (state, action: PayloadAction<IStoredIngredient[]>) => {
            state.push(...action.payload);
        }
    }
});

export const {fill} = fridgeSlice.actions;
export default fridgeSlice.reducer;