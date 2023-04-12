import { FC, useEffect, useState } from 'react'
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { useRef } from 'react';
import { commandResponse } from '../../data/commands';
import { useDispatch, useSelector } from 'react-redux';
import CommandLine, { ICommandLine } from './CommandLine';
import { RootState } from '../../app/store';
import { runCommandInterpreter } from './commandInterpreter';


const Console : FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [commandLog,setCommandLog] = useState<ICommandLine[]>([]);
  const [commandHistory,setCommandHistory] = useState<string[]>([]);
  const [previousCommandIndex,setPreviousCommandIndex] = useState<number>(0);
  const COMMANDS_LOG_CAPACITY = 70;
  const COMMANDS_HISTORY_CAPACITY = 50;

  const desktopState = useSelector((state: RootState) => state.desktop)
  const dispatch = useDispatch();

  const handleAddCommandLog = (commandLine:ICommandLine) => {
    if(commandLog.length + 1 === COMMANDS_LOG_CAPACITY){
        setCommandLog(arr => [...arr.slice(1), commandLine]); 
    } else {
        setCommandLog(arr => [...arr, commandLine]);
    }
  }

  const handleAddCommandHistory = (command:string) => {
    if(commandLog.length + 1 === COMMANDS_HISTORY_CAPACITY){
        setCommandHistory(arr => [...arr.slice(1), command]); 
    } else {
        setCommandHistory(arr => [...arr, command]);
    }
  }

  const focusConsole = () => {
    inputRef.current && inputRef.current.focus();
  }

  const enterCommand = () => {
    if(inputRef.current && inputRef.current.value){
        //get command value
        const command = inputRef.current.value;
        
        //interpret the command and get a response
        const res : commandResponse | undefined = runCommandInterpreter({
            input: command,
            currentDesktopState: desktopState,
            dispatch: dispatch,
            clearConsoleAction: ()=>{setCommandLog([])}
        });
        if(res){
            const cmdLine : ICommandLine = {
                command: command,
                info: res.message,
                infoType: res.code
            }
            handleAddCommandLog(cmdLine);
            handleAddCommandHistory(cmdLine.command);
        }
        //clear the input
        inputRef.current.value="";
    }
  }

  const getPreviousCommand = (direction:1|-1) => {
    if(inputRef.current){
        const newIndex = Math.max(0,previousCommandIndex+direction);
        if(newIndex>=commandHistory.length){
            inputRef.current.value = "";
        } else {
            inputRef.current.value = commandHistory[newIndex];
        }        
        setPreviousCommandIndex(Math.min(newIndex,commandHistory.length));
    }
  }

  useEffect(()=>{
    setPreviousCommandIndex(commandHistory.length);
  },[commandHistory])

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.key){
        case 'Enter':
            enterCommand();
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            e.preventDefault();
            getPreviousCommand(e.key==="ArrowUp" ? -1 : 1);
            break;
        default:
            setPreviousCommandIndex(commandLog.length);
            break;
    }
  }

  return (
    <StyledConsole onClick={focusConsole}>
        <StyledConsoleHistory>
            {
                commandLog.map((command,index) => (
                    <CommandLine 
                        key={`${index}-${command.command}`} 
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
            <StyledConsoleInput type="text" ref={inputRef} onKeyDown={(e)=>handleKeyDown(e)} />
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

export default Console