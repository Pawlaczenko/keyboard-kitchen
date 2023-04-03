import React, { FC, useState } from 'react'
import Panel from '../Panels/Panel/Panel';
import { PANELS, PANEL_THEMES } from '../../data/panels';
import styled from 'styled-components';
import { useRef,useEffect } from 'react';

const Console : FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [consoleLog,setConsoleLog] = useState<string[]>([]);

  const focusConsole = () => {
    inputRef.current && inputRef.current.focus();
  }

  const enterCommand = () => {
    if(inputRef.current && inputRef.current.value){
        const command = inputRef.current.value;
        console.log(consoleLog);
        setConsoleLog(oldArray => [...oldArray,command]);
        inputRef.current.value="";
    } 
  }

  const handleKeyDown = (e:KeyboardEvent) => {
    switch(e.key){
        case 'Enter':
            enterCommand();
            break;
    }
  }

  useEffect(() => {
    inputRef.current?.addEventListener("keydown",handleKeyDown);
  },[]);

  return (
    <Panel title="Keyboard Kitchen" panelType={PANELS.CONSOLE}>
        <StyledConsole onClick={focusConsole}>
            <StyledConsoleHistory>
                {
                    consoleLog.map((command,index) => <StyledConsoleCommand key={index}>{command}</StyledConsoleCommand>)
                }
            </StyledConsoleHistory>
            <StyledConsoleCommand>
                What would you like to do?
            </StyledConsoleCommand>
            <StyledConsoleLabel>
                <StyledConsoleInput type="text" ref={inputRef} />
            </StyledConsoleLabel>
        </StyledConsole>
    </Panel>
  )
}

const StyledConsole = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    color: white;
`;

const StyledConsoleHistory = styled.div`
    flex: 1;
`;

const StyledConsoleCommand = styled.p`
    margin: .5rem 0;
`

const StyledConsoleLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    &:before {
        content: ">";
        color: var(--theme-text);
    }
`

const StyledConsoleInput = styled.input`
    width: 100%;
    background: none;
    border: none;
    
    color: inherit;
    text-transform: uppercase;

    padding-left: 1.5rem;

    &:focus {
        outline: none;
    }
`;

export default React.memo(Console)