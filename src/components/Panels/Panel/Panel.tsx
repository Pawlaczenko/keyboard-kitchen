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
      <StyledPanelWrapper panelTheme={panelTheme}>
        <PanelBar
          barColor={panelTheme.barColor}
          buttonHoverColor={panelTheme.buttonHoverColor} 
          title={title}
          handlePointerDown={startDrag}
        />
        <StyledPanelChildren>
            {children}
        </StyledPanelChildren>
      </StyledPanelWrapper>
    </DraggableEntity>
  )
}

const StyledPanelWrapper = styled(motion.div)<{panelTheme: IPanelTheme}>`
    --panel-min-size: 15rem;
    --panel-default-size: 35rem;
    --panel-radius: 2rem;

    ${({panelTheme}) => `
      --theme-ratio: ${panelTheme.ratio || "1/1"};
      --theme-panel: ${panelTheme.panelColor};
      --theme-bar: ${panelTheme.barColor};
      --theme-hover: ${panelTheme.buttonHoverColor};
    `}

    min-width: var(--panel-min-size);
    width: var(--panel-default-size);
    min-height: var(--panel-min-size);
    aspect-ratio: var(--theme-ratio);

    overflow: hidden;
    resize: both;

    display: flex;
    flex-direction: column;
    border-radius: var(--panel-radius);

    box-shadow: var(--shadow-primary);
`;

const StyledPanelChildren = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  overflow-y: scroll;

  background: var(--theme-panel);

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--theme-hover);
    border-radius: 1rem;
  }
`;

export default Panel