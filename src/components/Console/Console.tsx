import React, { FC, useState } from 'react'
import Panel from '../Panels/Panel/Panel';
import { PANELS, getPanelByName } from '../../data/panels';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { useRef,useEffect } from 'react';
import { COMMAND, COMMAND_CODE, commandLine, commandResponse, sendResponse } from '../../data/commands';
import { useDispatch } from 'react-redux';
import { displayDish, removeDish, toggleOpenPanel } from '../../features/desktop/desktopSlice';
import CommandLine from './CommandLine';
import { DISHES, getDishByName } from '../../data/dishes';

const Console : FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [consoleLog,setConsoleLog] = useState<commandLine[]>([]);
  const dispatch = useDispatch();

  const focusConsole = () => {
    inputRef.current && inputRef.current.focus();
  }

  const enterCommand = () => {
    if(inputRef.current && inputRef.current.value){
        //get command value
        const command = inputRef.current.value;
        
        //interpret the command and get a response
        const res : commandResponse | undefined = runCommandInterpreter(command);
        if(res){
            const cmdLine : commandLine = {
                command: command,
                info: res.message,
                infoType: res.code
            }
            setConsoleLog(oldArray => [...oldArray,cmdLine]);
        }

        //clear the input
        inputRef.current.value="";
    } 
  }

  const clearConsole = () => {
    setConsoleLog([]);
  }

  const handleKeyDown = (e:KeyboardEvent) => {
    switch(e.key){
        case 'Enter':
            enterCommand();
            break;
    }
  }

  const runCommandInterpreter = (command:string) : commandResponse | undefined => {
    const commandKeys = command.trim().split(" ");
    switch(commandKeys[0]){
        case COMMAND.OPEN:
        case COMMAND.CLOSE:
            const panelName = commandKeys.slice(1).join(" ");
            const panel = getPanelByName(panelName);
            const opened = commandKeys[0] === COMMAND.OPEN;
            if(panel){
                dispatch(toggleOpenPanel({panelType: panel, opened: opened}));
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(COMMAND_CODE.ERROR, `${panelName} is not a valid PANEL name.`);
            }
        case COMMAND.GET:{
            const dishName = commandKeys[1];
            const dishType = getDishByName(dishName);
            if(dishType) {
                dispatch(displayDish(dishType));
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(COMMAND_CODE.ERROR, `${dishName} ia not a valid DISH name.`);
            }
        }
        case COMMAND.STASH:
            const dishName = commandKeys[1];
            const id = (commandKeys.length > 2) ? parseInt(commandKeys[2]) : 1;
            const dishType = getDishByName(dishName);

            if(dishType) {
                if(isNaN(id)) return sendResponse(COMMAND_CODE.ERROR, `${dishName} is not a valid DISH name.`);
                dispatch(removeDish({dishType: dishType,id: id}));
                return sendResponse(COMMAND_CODE.OK);
            } else {
                return sendResponse(COMMAND_CODE.ERROR, `${dishName} is not a valid DISH name.`);
            }
        case COMMAND.CLEAR:
            clearConsole();
            break;
        default:
            return sendResponse(COMMAND_CODE.ERROR, `${command} is not a valid command.`);
    }
  }

  useEffect(() => {
    inputRef.current?.addEventListener("keydown",handleKeyDown);
  },[]);

  return (
    <StyledConsole onClick={focusConsole}>
        <StyledConsoleHistory>
            {
                consoleLog.map((command,index) => (
                    <CommandLine 
                        key={index} 
                        command={command.command}
                        info={command.info}
                        infoType={command.infoType}
                    />
                ))
            }
        </StyledConsoleHistory>
        <StyledConsoleLabel>
            <StyledConsoleCommand>
                What would you like to do?
            </StyledConsoleCommand>
            <StyledConsoleInput type="text" ref={inputRef} />
        </StyledConsoleLabel>
    </StyledConsole>
  )
}

export const StyledConsole = styled.div`
    position: relative;
    margin: 1rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    color: white;
    background-color: var(--color-console);
    background: url(${logo}) top 0 right 50% no-repeat;
    background-size: 50%;
`;

const StyledConsoleHistory = styled.div`
    position: relative;
    flex: 1;
    overflow-y: scroll;
    
    margin-top: 7rem;
    padding: 0 1.5rem;

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #222;
    border-radius: 1rem;
    &:hover{
        background: #444;
    }
  }
`;

const StyledConsoleCommand = styled.p`
    padding: .5rem 0;
    &::before {
        content: "> ";
    }
`

const StyledConsoleLabel = styled.label`
    padding: 1rem;
    border-radius: .5rem;
    background: #222;
`

const StyledConsoleInput = styled.input`
    width: 100%;
    padding-left: 1.5rem;
    background: none;
    border: none;
    
    color: inherit;
    font-size: var(--fs-heading);

    &:focus {
        outline: none;
    }
`;

export default React.memo(Console)