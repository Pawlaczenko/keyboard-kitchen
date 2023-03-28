export enum INGREDIENTS_TAG {
    FRUIT = "fruits",
    VEGETABLE = "vegetables",
    SPICE = "spices",
    GRAINS = "grains",
    MEAT = "meat",
    OIL = "oils and fats",
    DRINK = "drinks",
    DIARY = "diary products",
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
    GRATEABLE = "grated",
    MASHABLE = "mashed",
}

export interface IIngredient {
    name: ingredientKey,
    tags: INGREDIENTS_TAG[],
    unitOfMeasurement: UNIT,
    portioning?: PORTIONING[]
    price: number
}

export interface IStoredIngredient {
    ingredient: IIngredient,
    quantity: number,
    portioned?: PORTIONING
}

export type ingredientKey = 
    "salt" | "pepper" | "egg" | "sugar" | "flour" | "water" | "apple" | "milk" | "pasta"

export const INGREDIENTS = new Map<ingredientKey,IIngredient>([
    ["salt",
    {
        name: "salt",
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.01
    }],
    ["pepper",
    {
        name: "pepper",
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.02
    }],
    ["egg",
    {
        name: "egg",
        tags: [INGREDIENTS_TAG.DIARY],
        unitOfMeasurement: UNIT.COUNTABLE,
        price: 0.1
    }],
    ["sugar",
    {
        name: "sugar",
        tags: [INGREDIENTS_TAG.SPICE],
        unitOfMeasurement: UNIT.TSP,
        price: 0.02
    }],
    ["flour",
    {
        name: "flour",
        tags: [INGREDIENTS_TAG.GRAINS],
        unitOfMeasurement: UNIT.GRAM,
        price: 0.1
    }],
    ["water",
    {
        name: "water",
        tags: [INGREDIENTS_TAG.DRINK],
        unitOfMeasurement: UNIT.LITR,
        price: 0
    }],
    ["apple",
    {
        name: "apple",
        tags: [INGREDIENTS_TAG.FRUIT],
        unitOfMeasurement: UNIT.COUNTABLE,
        price: 2.5,
        portioning: [PORTIONING.SLICEABLE]
    }],
    ["milk",
    {
        name: "milk",
        tags: [INGREDIENTS_TAG.DRINK, INGREDIENTS_TAG.DIARY],
        unitOfMeasurement: UNIT.LITR,
        price: 2.65
    }],
    ["pasta",
    {
        name: "pasta",
        tags: [INGREDIENTS_TAG.GRAINS],
        unitOfMeasurement: UNIT.GRAM,
        price: 0.5
    }],
])