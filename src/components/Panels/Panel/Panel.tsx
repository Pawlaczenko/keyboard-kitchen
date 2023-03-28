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
      <StyledPanelWrapper ratio={panelTheme.ratio}>
        <PanelBar
          barColor={panelTheme.barColor}
          buttonHoverColor={panelTheme.buttonHoverColor} 
          title={title}
          handlePointerDown={startDrag}
        />
        <StyledPanelChildren panelColor={panelTheme.panelColor} accentColor={panelTheme.barColor}>
            {children}
        </StyledPanelChildren>
      </StyledPanelWrapper>
    </DraggableEntity>
  )
}

const StyledPanelWrapper = styled(motion.div)<{ratio?: string}>`
    --panel-min-size: 15rem;
    --panel-default-size: 32rem;
    --panel-radius: 2rem;

    min-width: var(--panel-min-size);
    width: var(--panel-default-size);
    min-height: var(--panel-min-size);
    aspect-ratio: ${(props) => props.ratio || "1/1"};

    overflow: hidden;
    resize: both;

    display: flex;
    flex-direction: column;
    border-radius: var(--panel-radius);

    box-shadow: var(--shadow-primary);
`;

const StyledPanelChildren = styled.div<{panelColor: string, accentColor: string}>`
  flex: 1;
  padding: 1rem 2rem;
  overflow-y: scroll;

  --accent-color: ${(props) => props.accentColor};
  background: ${(props) => props.panelColor};

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 1rem;
  }
`;

export default Panel