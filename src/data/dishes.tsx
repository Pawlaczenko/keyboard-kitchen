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

export const dishImages = new Map<DISHES,string>([
    [DISHES.BOWL,bowl],
    [DISHES.POT,pot],
    [DISHES.PLATE,plate],
    [DISHES.PAN,pan],
    [DISHES.BLENDER,blender],
]);