import { Dispatch } from "@reduxjs/toolkit";
import { COMMAND, COMMAND_CODE, commandResponse, createResponse } from "../../data/commands";
import { PANELS, getPanelByName } from "../../data/panels";
import { displayDish, displayRecipe, stashDish, toggleOpenPanel } from "../../features/desktop/desktopSlice";
import { getDishByName } from "../../data/dishes";
import { doesRecipeExist } from '../../data/recipes';

export class CommandInterpreter {
    private dispatch : Dispatch;
    private clearConsoleCommand : ()=>void;

    constructor(dispatch: Dispatch,clearConsoleCommand:()=>void){
        this.dispatch = dispatch;
        this.clearConsoleCommand = clearConsoleCommand;
    }

    public run(input: string): commandResponse | undefined {
        const normalizedInput = input.toLocaleLowerCase().trim().split(" ");;
        const command = normalizedInput[0];
        const command_args = normalizedInput.slice(1);
        let command_response: commandResponse | undefined = {code: COMMAND_CODE.OK};

        try {
            switch(command){
                case COMMAND.OPEN:
                    this.command_open(command_args[0]);
                    break;
                case COMMAND.CLOSE:
                    const panelName = command_args[0];
                    const recipeName = command_args.slice(1).join(" ");
                    this.command_close(panelName,recipeName);
                    break;
                case COMMAND.GET:
                    this.command_get(command_args);
                    break;
                case COMMAND.STASH:
                    this.command_stash(command_args);
                    break;
                case COMMAND.READ:
                    const recipe = command_args.join(" ");
                    this.command_read(recipe);
                    break;
                case COMMAND.CLEAR:
                    this.clearConsoleCommand();
                    command_response = undefined;
                    break;
                default:
                    throw new Error(`Incorrect command syntax`);
            }
        } catch(error) {
            command_response = createResponse(COMMAND_CODE.ERROR, this.getError(error));
        }

        return command_response;
    }

    private command_open(panelName: string) {
        if(!panelName) throw new Error(`Incorrect command syntax.`);
        
        const panel : PANELS = getPanelByName(panelName);
        if(panel) {
            this.toggle_panel(panel,true);
        } else {
            throw new Error(`"${panelName}" is not a valid PANEL`);
        }
    }

    private command_close(panelName: string, recipeName?: string) {
        if(!panelName) return createResponse(COMMAND_CODE.ERROR,`Incorrect command syntax.`);
        const panel = getPanelByName(panelName);
        
        if(panel===PANELS.RECIPE){
            if(!recipeName || recipeName.length===0){
                throw new Error(`Incorrect command syntax. Please provide recipe name`);
            }

            const recipe = doesRecipeExist(recipeName);
            if(recipe){
                this.dispatch(displayRecipe({display:false,recipe: recipe}))
            } else {
                throw new Error(`No recipe was found with the name "${recipeName}"`);
            }
        } else if(panel) {
            this.toggle_panel(panel,false);
        } else {
            throw new Error(`No panel was found with the name "${panelName}"`);
        }
    }

    private command_get(dishToOpen:string[]) {
        const [dishName,dishQuantity] = dishToOpen;
        if(!dishName) throw new Error(`Incorrect comamnd syntax. Provide a dish name`);
        let qnt : number = dishQuantity ? parseInt(dishQuantity) : 1;

        if(isNaN(qnt)) throw new Error(`Incorrect comamnd syntax. Provide a correct quantity number`);

        const dishType = getDishByName(dishName);
        if(dishType){
            for(let i = 0; i < qnt; i++) {
                this.dispatch(displayDish(dishType));
            }
        } else {
            throw new Error(`No dish was found with the name "${dishName}"`)
        }
    }

    private command_stash(dishesToStash:string[]) {
        if(dishesToStash.length===0) throw new Error(`Incorrect comamnd syntax. Provide a dish name`);
        const dishName = dishesToStash[0];
        let ids = dishesToStash.slice(1);
        if(ids.length === 0) throw new Error(`Incorect command syntax. Please provide id's of the dish you wanted to stash`)

        const dishType = getDishByName(dishName);
        if(dishType) {          
            ids.map((id) => {
                this.dispatch(stashDish({dishType: dishType, id: parseInt(id)}));
            });
        } else {
            throw new Error(`No dish was found with the name "${dishName}"`)
        }
    }

    private command_read(recipeName: string) {
        const recipe = doesRecipeExist(recipeName);
        if(recipe){
            this.dispatch(displayRecipe({display:true,recipe: recipe}));
        } else {
            throw new Error(`No recipe was found with the name "${recipeName}"`);
        }
    }

    private toggle_panel(panel:PANELS,incomingState:boolean) {         
        this.dispatch(toggleOpenPanel({panelType: panel, opened: incomingState}));
    }

    private getError(error: unknown) : string {
        if (error instanceof Error) return error.message
        return String(error)
    }
}