import { ICommandLine, StylizedCommandInfo } from "../components/Console/CommandLine"

export enum COMMAND {
    OPEN="open",
    CLOSE="close",
    GET="get",
    STASH="stash",
    CLEAR="clear",
    READ="read"
}

export enum COMMAND_CODE {
    OK="ok",
    ERROR="error"
}

export type commandResponse = {
    code: COMMAND_CODE,
    message?: string,
}

export const createResponse = (code:COMMAND_CODE,message?: string) : commandResponse => {
    return {
        code: code,
        message: message
    }
}

export const WELCOME_MESSAGE : ICommandLine[] = [
    {info:<StylizedCommandInfo center space>Welcome in <mark>KEYBOARD KITCHEN</mark></StylizedCommandInfo>},
    {info:<StylizedCommandInfo>The ultimate cooking adventure that you can play right from your keyboard! Get ready to put your culinary skills to the test and become the next top chef.</StylizedCommandInfo>},
    {info:<StylizedCommandInfo>To get started, simply type <mark>HELP</mark> to see the list of commands you can use in the game. From there, you'll be able to navigate the kitchen, gather ingredients, and create delicious dishes that will impress even the toughest food critics.</StylizedCommandInfo>},
    {info:<StylizedCommandInfo>So get your typing fingers ready and let's get cooking in <mark>KEYBOARD KITCHEN.</mark></StylizedCommandInfo>},
    {info:<StylizedCommandInfo>Bon appétit!</StylizedCommandInfo>},
  ]