export enum COMMAND {
    OPEN="open",
    CLOSE="close",
    GET="get",
    STASH="stash",
    CLEAR="clear"
}

export enum COMMAND_CODE {
    OK="ok",
    ERROR="error"
}

export type commandResponse = {
    code: COMMAND_CODE, 
    message?: string,
}

export const sendResponse = (code:COMMAND_CODE,message?: string) : commandResponse => {
    return {
        code: code,
        message: message
    }
}