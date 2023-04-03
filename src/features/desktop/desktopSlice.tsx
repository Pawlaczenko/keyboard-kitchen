import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PANELS } from '../../data/panels';
import { recipeKey } from '../../data/recipes';
import { DISHES, DisplayedDish } from "../../data/dishes";
import { findNextId } from "../../helpers/array.helper";
import React, { RefObject } from "react";

type VisiblePanels = {[key in PANELS]?: boolean} 
type VisibleDishes = {[key in DISHES]: Array<number>};
type VisibleRecipes = Array<recipeKey>;

export type DesktopState = {
    panels: VisiblePanels
    dishes: VisibleDishes,
    recipes: VisibleRecipes,
}

const MAXED_DISHES_ON_SCREEN : number = 5;

const initialState: DesktopState = {
    dishes: {
        [DISHES.BLENDER]:[],
        [DISHES.BOWL]:[],
        [DISHES.PAN]:[],
        [DISHES.PLATE]:[],
        [DISHES.POT]:[],
    },
    recipes: [],
    panels: {
        [PANELS.FRIDGE]: false,
        [PANELS.WORKTOP]: false,
        [PANELS.RECIPEBOOK]: false,
    },
};

export const desktopSlice = createSlice({
    name: "desktop",
    initialState,
    reducers: {
        toggleOpenPanel: (state, action: PayloadAction<{panelType: PANELS, opened?: boolean}>) => {
            state.panels[action.payload.panelType] = action.payload.opened;
        },
        displayRecipe: (state, action: PayloadAction<{recipe: recipeKey,display:boolean}>) => {
            const name = action.payload.recipe;
            const shouldDisplay = action.payload.display;
            const isRecipeVisible = state.recipes.some((item) => item === name);

            if(!shouldDisplay && isRecipeVisible){ //If Exists And I want to hide the recipe
                state.recipes = state.recipes.filter(item => item!==name);
            } else if(shouldDisplay && !isRecipeVisible){
                state.recipes.push(name);
            }
        },
        displayDish: (state, action: PayloadAction<DISHES>) => {
            const dishType = action.payload;
            const id = findNextId([...state.dishes[dishType]]);
            if(state.dishes[dishType].length < MAXED_DISHES_ON_SCREEN){
                state.dishes[dishType].push(id);
            }
        },
        removeDish: (state, action: PayloadAction<DisplayedDish>) => {
            const dishType = action.payload.dishType;
            const id = action.payload.id;
            if(state.dishes[dishType].includes(id)){
                state.dishes[dishType] = state.dishes[dishType].filter(item => item!==id);
            }
        }
    },
});

export const { toggleOpenPanel,displayRecipe,displayDish,removeDish} = desktopSlice.actions;
export default desktopSlice.reducer;
