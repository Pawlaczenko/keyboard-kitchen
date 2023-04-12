import { Dispatch } from "@reduxjs/toolkit";
import { COMMAND, COMMAND_CODE, commandResponse, sendResponse } from "../../data/commands";
import { getPanelByName } from "../../data/panels";
import { DesktopState, displayDish, removeDish, toggleOpenPanel } from "../../features/desktop/desktopSlice";
import { MAX_DISHES_ON_SCREEN, getDishByName } from "../../data/dishes";

type IInterpreterProps = {
    input: string,
    dispatch: Dispatch,
    currentDesktopState: DesktopState,
    clearConsoleAction: ()=>void
}

export const runCommandInterpreter = ({input,dispatch,currentDesktopState,clearConsoleAction}:IInterpreterProps) : commandResponse | undefined => {
    const command_args = input.trim().split(" ");
    const command = command_args[0];
    const command_parameters = command_args.slice(1);
    
    const openedPanels = currentDesktopState.panels;
    const openedDishes = currentDesktopState.dishes;

    switch(command){
        // OPENING AND CLOSING PANELS
        case COMMAND.OPEN:
        case COMMAND.CLOSE:
            const panelName = command_parameters.join(" ");
            const panel = getPanelByName(panelName);
            const shouldOpen = command === COMMAND.OPEN;

            if(panel){
                const currentPanelState = openedPanels[panel];
                if(currentPanelState && shouldOpen || !currentPanelState && !shouldOpen){
                    return sendResponse(COMMAND_CODE.ERROR,`${panelName} is already ${currentPanelState?"opened":"closed"}`);
                }
                dispatch(toggleOpenPanel({panelType: panel, opened: shouldOpen}));
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(
                    COMMAND_CODE.ERROR, 
                    `${panelName} is not a valid PANEL name.`
                );
            }
        // SHOWING DISHES
        case COMMAND.GET:{
            if(command_parameters.length===0) return sendResponse(COMMAND_CODE.ERROR, `You must give the Dish name.`);
            const dishName = command_parameters[0];
            const dishType = getDishByName(dishName);
            if(dishType) {
                const currentDish = openedDishes[dishType];
                if(currentDish.length === MAX_DISHES_ON_SCREEN){
                    return sendResponse(COMMAND_CODE.ERROR, `You have reached the max capacity of ${MAX_DISHES_ON_SCREEN} dishes of the same type on screen.`);
                }
                dispatch(displayDish(dishType));
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(COMMAND_CODE.ERROR, `${dishType} is not a valid DISH name.`);
            }
        }
        // REMOVING DISHES
        case COMMAND.STASH:{
            if(command_parameters.length===0) return sendResponse(COMMAND_CODE.ERROR, `You must give the Dish name.`);
            const dishName = command_parameters[0];
            const dishType = getDishByName(dishName);

            const ids = command_parameters.slice(1);

            if(dishType) {
                if(ids.length === 0) return sendResponse(COMMAND_CODE.ERROR, `You must pass the dish'es ids in order to remove them.`);
                
                const currentDish = openedDishes[dishType];
                let invalidIds = "";
                ids.map(dishId => {
                    const parsedId = parseInt(dishId);                    
                    if(isNaN(parsedId) || !currentDish.find(id=>id===parsedId)) invalidIds+=`${dishId} `;
                    
                    dispatch(removeDish({dishType: dishType, id: parsedId}));
                })

                if(invalidIds.length > 0) return sendResponse(COMMAND_CODE.ERROR, `Dishes with IDs: ${invalidIds} do not exist.`);
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(COMMAND_CODE.ERROR, `${dishName} is not a valid DISH name.`);
            }
        }
        // CLEARING THE CONSOLE
        case COMMAND.CLEAR:
            clearConsoleAction();
            break;
        default:
            return sendResponse(COMMAND_CODE.ERROR, `${input} is not a valid command.`);
    }
  }