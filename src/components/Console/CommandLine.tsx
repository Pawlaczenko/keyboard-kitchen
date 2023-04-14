import React, { FC } from 'react'
import { COMMAND_CODE } from '../../data/commands'
import styled from 'styled-components'

export interface ICommandLine {
  command?: string,
  info?: string | React.ReactElement,
  infoType?: COMMAND_CODE
}

const CommandLine : FC<ICommandLine> = ({command,info,infoType=COMMAND_CODE.OK}) => {
  return (
    <StyledCommandLine>
        {command && <StyledCommand>{command}</StyledCommand>}
        {info && <StyledCommandInfo type={infoType}>{info}</StyledCommandInfo>}
    </StyledCommandLine>
  )
}

const StyledCommandLine = styled.div`

`;

const StyledCommand = styled.p`
    padding: .5rem 0;
    &::before {
        content: "> ";
    }
`

const StyledCommandInfo = styled.p<{type: COMMAND_CODE}>`
  color: ${(props) => props.type === COMMAND_CODE.ERROR ? "var(--color-error)" : "white"};
`;

export const StylizedCommandInfo = styled.p<{center?:boolean, space?: boolean}>`
  ${(props) => props.center && 'text-align: center'};
  ${(props) => props.space && 'margin-top: 1.5rem'};
  margin-bottom: 1.5rem;
  & > mark {
    color: var(--color-primary);
    background: none;
  }
`;

export default React.memo(CommandLine)