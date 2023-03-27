export enum INGREDIENTS_TAG {
    FRUIT,
    VEGETABLE,
    SPICE,
    GRAINS,
    MEAT,
    OIL,
    FLUID,
    DIARY,
}

export enum UNIT {
    GRAM = "g",
    LITR = "l",
    TSP = "tsp",
    COUNTABLE = ""
}

export enum PORTIONING {
    SLICEABLE = "sliced",
    CHOPPABLE = "chopped",
    PEELABLE = "peeled",
    GRATEABLE = "grated",
    MASHABLE = "mashed",
}

export interface IIngredient {
    tags: INGREDIENTS_TAG[],
    unitOfMeasurement: UNIT,
    portioning?: PORTIONING[]
    price: number
}

export type ingredientKey = 
    "salt" | "pepper" | "egg" | "sugar" | "flour" | "water" | "apple" | "milk" | "pasta"

export const INGREDIENTS = new Map<ingredientKey,IIngredient>([
    ["salt",
    {
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.01
    }],
    ["pepper",
    {
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.02
    }],
    ["egg",
    {
        tags: [INGREDIENTS_TAG.DIARY],
        unitOfMeasurement: UNIT.COUNTABLE,
        price: 0.1
    }],
    ["sugar",
    {
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.02
    }],
    ["flour",
    {
        tags: [INGREDIENTS_TAG.GRAINS],
        unitOfMeasurement: UNIT.GRAM,
        price: 0.1
    }],
    ["water",
    {
        tags: [INGREDIENTS_TAG.FLUID],
        unitOfMeasurement: UNIT.LITR,
        price: 0
    }],
    ["apple",
    {
        tags: [INGREDIENTS_TAG.FRUIT],
        unitOfMeasurement: UNIT.COUNTABLE,
        price: 2.5,
        portioning: [PORTIONING.PEELABLE,PORTIONING.SLICEABLE]
    }],
    ["milk",
    {
        tags: [INGREDIENTS_TAG.FLUID, INGREDIENTS_TAG.DIARY],
        unitOfMeasurement: UNIT.LITR,
        price: 2.65
    }],
    ["pasta",
    {
        tags: [INGREDIENTS_TAG.GRAINS],
        unitOfMeasurement: UNIT.GRAM,
        price: 0.5
    }],
])