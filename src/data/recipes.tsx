import { ingredientKey, INGREDIENTS, IStoredIngredient, PORTIONING } from "./ingredients"

enum METHODS {
    FRY,
    BOIL,
    MIX,
    BLEND,
    PLATE
}

export interface IRecipe {
    name: recipeKey,
    steps: IRecipeSteps[],
    text: string[]
}

interface IRecipeSteps {
    ingredients: Array<IStoredIngredient | number>,
    method: METHODS
}

const getStoredIngredient = (name: ingredientKey, quantity: number, portioned?: PORTIONING) : IStoredIngredient => {
    const ingredient : IStoredIngredient = {
        ingredient: INGREDIENTS.get(name)!,
        quantity: quantity,
        portioned: portioned
    }
    return ingredient;
}

export type recipeKey = "Spaghetti Carbonara" | "Tomato Soup"

export const RECIPES = new Map<recipeKey,IRecipe>([
    [
        "Spaghetti Carbonara",
        {
            name: "Spaghetti Carbonara",
            steps: [
                {
                    ingredients: [
                        getStoredIngredient("water",1),
                        getStoredIngredient("pasta",100),
                        getStoredIngredient("salt",2)
                    ],
                    method: METHODS.BOIL
                },
                {
                    ingredients: [
                        getStoredIngredient("bacon",100,PORTIONING.CHOPPABLE),
                        getStoredIngredient("butter",10)
                    ],
                    method: METHODS.FRY
                },
                {
                    ingredients: [
                        1,
                        2,
                        getStoredIngredient("egg",3)
                    ],
                    method: METHODS.MIX
                },
                {
                    ingredients: [
                        2
                    ],
                    method: METHODS.PLATE
                }
            ],
            text: [
                "Cook pasta in salted water",
                "Chop 100g bacon",
                "Fry bacon in 10g butter",
                "Mix cooked pasta with 3 eggs and fried bacon",
            ]
        }
    ],
    [
        "Tomato Soup",
        {
            name: "Tomato Soup",
            steps: [
                {
                    ingredients: [
                        getStoredIngredient("olive oil",0.1),
                        getStoredIngredient("garlic",0.2,PORTIONING.CHOPPABLE),
                        getStoredIngredient("onion",1,PORTIONING.CHOPPABLE)
                    ],
                    method: METHODS.FRY
                },
                {
                    ingredients: [
                        1,
                        getStoredIngredient("tomato",4,PORTIONING.CHOPPABLE)
                    ],
                    method: METHODS.FRY
                },
                {
                    ingredients: [
                        2,
                        getStoredIngredient("vegetable broth",.5),
                        getStoredIngredient("cream",100),
                        getStoredIngredient("salt",1),
                        getStoredIngredient("pepper",1),
                    ],
                    method: METHODS.BOIL
                },
                {
                    ingredients: [
                        3
                    ],
                    method: METHODS.PLATE
                }
            ],
            text: [
                "Chop onion and garlic",
                "Fry in olive oil",
                "Chop tomatoes",
                "Add to pan and fry",
                "Boil with broth, cream, salt and pepper",
                "Blend mixture"
            ]
        }
    ],
])