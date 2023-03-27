import bowl from '../assets/dishes/bowl.svg';
import blender from '../assets/dishes/blender.svg';
import pan from '../assets/dishes/pan.svg';
import pot from '../assets/dishes/pot.svg';
import plate from '../assets/dishes/plate.svg';

export enum DISHES {
    BOWL = "bowl",
    POT = "pot",
    PLATE = "plate",
    PAN = "pan",
    BLENDER = "blender",
}

export interface IDishTheme {
    image: string,
    textColor: "black"|"white"
}

export const DISH_THEMES = new Map<DISHES,IDishTheme>([
    [
        DISHES.BLENDER,
        {
            image: blender,
            textColor: "black"
        }
    ],
    [
        DISHES.BOWL,
        {
            image: bowl,
            textColor: "black"
        }
    ],
    [
        DISHES.PAN,
        {
            image: pan,
            textColor: "white"
        }
    ],
    [
        DISHES.PLATE,
        {
            image: plate,
            textColor: "black"
        }
    ],
    [
        DISHES.POT,
        {
            image: pot,
            textColor: "white"
        }
    ],
]);