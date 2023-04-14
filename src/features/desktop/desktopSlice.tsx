import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PANELS } from '../../data/panels';
import { recipeKey } from '../../data/recipes';
import { DISHES, DisplayedDish, MAX_DISHES_ON_SCREEN } from "../../data/dishes";
import { findNextId } from "../../helpers/array.helper";

type VisiblePanels = {[key in PANELS]?: boolean} 
type VisibleDishes = {[key in DISHES]: Array<number>};
type VisibleRecipes = Array<recipeKey>;

export type DesktopState = {
    panels: VisiblePanels
    dishes: VisibleDishes,
    recipes: VisibleRecipes,
}

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
        [PANELS.COOKBOOK]: false,
    }
};

export const desktopSlice = createSlice({
    name: "desktop",
    initialState,
    reducers: {
        toggleOpenPanel: (state, action: PayloadAction<{panelType: PANELS, opened?: boolean}>) => {
            const currentPanelState = state.panels[action.payload.panelType];
            const incomingState = action.payload.opened;
            if((currentPanelState && incomingState) || (!currentPanelState && !incomingState)){
                throw new Error(`${action.payload.panelType} is already ${currentPanelState?"opened":"closed"}`)
            }

            const panels = { ...state.panels, [action.payload.panelType]: action.payload.opened };
            state.panels = panels;
        },
        displayRecipe: (state, action: PayloadAction<{recipe: recipeKey,display:boolean}>) => {
            const name = action.payload.recipe;
            const shouldDisplay = action.payload.display;
            const isRecipeVisible = state.recipes.some((item) => item === name);

            if(!shouldDisplay){ //Hide
                if(!isRecipeVisible) throw new Error(`${name} recipe is already closed.`);
                state.recipes = state.recipes.filter(item => item!==name);
            } else { //show
                if(isRecipeVisible) throw new Error(`${name} recipe is already opened.`);
                state.recipes.push(name);
            }
        },
        displayDish: (state, action: PayloadAction<DISHES>)=> {
            const dishType = action.payload;
            const id = findNextId([...state.dishes[dishType]]);
            if(state.dishes[dishType].length === MAX_DISHES_ON_SCREEN){
                throw new Error(`You have reached the max capacity of ${MAX_DISHES_ON_SCREEN} dishes of the same type on screen.`)
            }
            state.dishes[dishType].push(id);
        },
        stashDish: (state, action: PayloadAction<DisplayedDish>)  => {
            const dishType = action.payload.dishType;
            const id = action.payload.id;
            if(state.dishes[dishType].includes(id)){
                state.dishes[dishType] = state.dishes[dishType].filter(item => item!==id);
            } else {
                throw new Error(`No dish to stash was found with an id of "${id}"`);
            }
        }
    },
});

export const { toggleOpenPanel,displayRecipe,displayDish,stashDish} = desktopSlice.actions;
export default desktopSlice.reducer;
