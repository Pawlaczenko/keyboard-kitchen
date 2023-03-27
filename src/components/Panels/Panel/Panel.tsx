import { motion, useDragControls } from 'framer-motion';
import React, { FC } from 'react'
import styled from 'styled-components';
import PanelBar from './PanelBar';
import DraggableEntity from '../../DraggableEntity/DraggableEntity';
import { IPanelTheme } from '../../../data/panels';

interface IPanelProps {
  children: React.ReactNode,
  panelTheme: IPanelTheme,
  title: string
}

const Panel : FC<IPanelProps> = ({children,panelTheme,title}) => {
  const dragControls = useDragControls();

  const startDrag = (event : React.PointerEvent<Element>) => {
    dragControls.start(event, { snapToCursor: false })
  }

  return (
    <DraggableEntity dragControlsObject={dragControls}>
      <StyledPanelWrapper>
        <PanelBar
          barColor={panelTheme.barColor}
          buttonHoverColor={panelTheme.buttonHoverColor} 
          title={title}
          handlePointerDown={startDrag}
        />
        <StyledPanelChildren panelColor={panelTheme.panelColor}>
            {children}
        </StyledPanelChildren>
      </StyledPanelWrapper>
    </DraggableEntity>
  )
}

const StyledPanelWrapper = styled(motion.div)`
    --panel-min-size: 15rem;
    --panel-default-size: 32rem;
    --panel-radius: 2rem;

    min-width: var(--panel-min-size);
    width: var(--panel-default-size);
    min-height: var(--panel-min-size);
    height: var(--panel-default-size);

    overflow: hidden;
    resize: both;

    display: flex;
    flex-direction: column;
    border-radius: var(--panel-radius);

    box-shadow: var(--shadow-primary);
`;

const StyledPanelChildren = styled.div<{panelColor: string}>`
  flex: 1;
  padding: 1rem 2rem;

  background: ${(props) => props.panelColor};
`;

export default Panel