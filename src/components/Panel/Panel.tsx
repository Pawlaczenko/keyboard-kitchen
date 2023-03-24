import { motion, useDragControls } from 'framer-motion';
import React, { FC } from 'react'
import styled from 'styled-components';
import PanelBar from './PanelBar';

const Panel : FC = () => {
  const dragControls = useDragControls()

  const startDrag = (event : React.PointerEvent<Element>) => {
    dragControls.start(event, { snapToCursor: false })
  }

  return (
    <StyledPanelWrapper
        drag
        dragMomentum={false}
        dragControls={dragControls}
        dragListener={false}        
    >
        <PanelBar 
          primaryColor='var(--color-primary)' 
          secondaryColor='var(--color-secondary)' 
          title="Carbonara Recipe"
          handlePointerDown={startDrag}
        />
        <StyledPanelChildren>
            siemka
        </StyledPanelChildren>
    </StyledPanelWrapper>
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

const StyledPanelChildren = styled.div`
  flex: 1;
  padding: 1rem 2rem;

  background: var(--color-yellow);
`;

export default Panel