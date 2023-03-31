import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PANELS } from '../../data/panels';
import RecipePanel from '../../components/Panels/RecipePanel/RecipePanel';
import Dish from "../../components/Dish/Dish";

type VisiblePanels = {[key in PANELS]?: boolean} 

export type DesktopState = {
    dishes: Array<typeof Dish>,
    recipes: Array<typeof RecipePanel>,
    panels: VisiblePanels
}

const initialState: DesktopState = {
    dishes: [],
    recipes: [],
    panels: {
        [PANELS.FRIDGE]: true,
        [PANELS.WORKTOP]: false,
        [PANELS.RECIPEBOOK]: false,
    },
};

export const desktopSlice = createSlice({
    name: "desktop",
    initialState,
    reducers: {
        toggleOpenPanel: (state, action: PayloadAction<PANELS>) => {
            state.panels[action.payload] = !state.panels[action.payload];
        },
    },
});

export const { toggleOpenPanel } = desktopSlice.actions;
export default desktopSlice.reducer;
