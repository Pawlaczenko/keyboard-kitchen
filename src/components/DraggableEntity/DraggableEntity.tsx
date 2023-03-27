import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { DragControls, motion } from 'framer-motion';
import { useContainerContext } from '../../context/ContainerContext';

interface IDraggableEntityProps {
    dragControlsObject?: DragControls,
    children: React.ReactNode
}

const DraggableEntity : FC<IDraggableEntityProps> = ({children,dragControlsObject}) => {
  const containerContext = useContainerContext();
  const [zindex,setZIndex] = useState(containerContext.zIndexStack);
  
  useEffect(()=>{
    containerContext.incrementzIndexStack(zindex);
  },[zindex]);

  return (
    <StyledDraggableEntity
        drag
        dragConstraints={containerContext.constraints} 
        dragMomentum={false}
        dragControls={dragControlsObject}
        dragListener={(dragControlsObject === undefined)}
        dragElastic={0}
        whileDrag={{scale: 1.05}}
        onDragStart={()=>{setZIndex(containerContext.zIndexStack+1)}}
        indexStack={zindex}
    >
        {children}
    </StyledDraggableEntity>
  )
}

export const StyledDraggableEntity = styled(motion.div)<{indexStack: number}>`
    position: absolute;
    z-index: ${(props)=>props.indexStack};
`;

export default DraggableEntity