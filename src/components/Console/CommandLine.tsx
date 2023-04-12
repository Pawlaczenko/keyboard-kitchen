import React, { FC } from 'react'
import { COMMAND_CODE } from '../../data/commands'
import styled from 'styled-components'

export interface ICommandLine {
  command: string,
  info?: string,
  infoType: COMMAND_CODE
}

const CommandLine : FC<ICommandLine> = ({infoType,command,info}) => {
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

export default React.memo(CommandLine)