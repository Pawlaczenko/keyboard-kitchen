import { FC, useEffect, useState } from 'react'
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { useRef } from 'react';
import { WELCOME_MESSAGE, commandResponse } from '../../data/commands';
import { useDispatch, useSelector } from 'react-redux';
import CommandLine, { ICommandLine } from './CommandLine';
import { CommandInterpreter } from './commandInterpreter';
import Logo from '../Logo/Logo';


const Console : FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleHistoryRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  
  const [commandLog,setCommandLog] = useState<ICommandLine[]>(WELCOME_MESSAGE);
  const [commandHistory,setCommandHistory] = useState<string[]>([]);
  const [previousCommandIndex,setPreviousCommandIndex] = useState<number>(0);

  const clearConsole = () => {
    setCommandLog([]);
  }

  const commandInterpreter = new CommandInterpreter(dispatch,clearConsole);

  const COMMANDS_LOG_CAPACITY = 70;
  const COMMANDS_HISTORY_CAPACITY = 50;


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
        const res : commandResponse | undefined = commandInterpreter.run(command);

        if(res){
            const cmdLine : ICommandLine = {
                command: command,
                info: res.message,
                infoType: res.code
            }
            handleAddCommandLog(cmdLine);
            if(cmdLine.command) handleAddCommandHistory(cmdLine.command);
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
    consoleHistoryRef.current?.scrollTo(0,consoleHistoryRef.current.scrollHeight);
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
            setPreviousCommandIndex(commandHistory.length);
            break;
    }
  }

  return (
    <StyledConsole onClick={focusConsole}>
        <StyledLogo>
          <img src={logo} alt="Keyboard Kitchen logo" />
        </StyledLogo>
        <StyledConsoleHistory ref={consoleHistoryRef}>
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
    background-size: 50%;
`;

const StyledLogo = styled.div`
  position: relative;

  & > img {
    width: 60%;
    margin: 0 auto;
  }

  &::before {
    --fade-element-height: 3rem;

    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: calc(var(--fade-element-height) * -1);
    
    background: linear-gradient(180deg, var(--color-console) 0%, rgba(0,0,0,0) 100%);
    width: 100%;
    height: var(--fade-element-height);
  }
`;

const StyledConsoleHistory = styled.div`
    position: relative;
    flex: 1;
    overflow-y: scroll;
    
    /* margin-top: 7rem; */
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

const StyledConsoleLabel = styled.label`
  padding: 1rem;
  border-radius: .5rem;
  background: #222;
  position: relative;

  &::before {
    content: ">";
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

const StyledConsoleInput = styled.input`
    width: 100%;
    padding-left: 3rem;
    background: none;
    border: none;
    
    color: inherit;
    font-size: var(--fs-body);

    &:focus {
        outline: none;
    }
`;

export default Console