import React, { FC, useCallback, useRef, useState } from 'react'
import styled from 'styled-components';
import { DragControls, motion } from 'framer-motion';
import { useContainerContext } from '../../context/ContainerContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { increaseHighestZIndex } from '../../features/zindex/zindexSlice';

interface IDraggableEntityProps {
    dragControlsObject?: DragControls,
    children: React.ReactNode
}

const DraggableEntity : FC<IDraggableEntityProps> = ({children,dragControlsObject}) => {
  const constraintsContext = useContainerContext();
  const highestIndex = useSelector((state: RootState) => state.zindex);
  const zIndexDispatch = useDispatch();

  const zindex = useRef<number>(highestIndex.zindex);

  const handleZIndexChange = () => {
    const newIndex = highestIndex.zindex+1;
    zindex.current = newIndex;
    zIndexDispatch(increaseHighestZIndex(newIndex));
  };

  return (
    <StyledDraggableEntity
        drag
        dragConstraints={constraintsContext} 
        dragMomentum={false}
        dragControls={dragControlsObject}
        dragListener={(dragControlsObject === undefined)}
        dragElastic={0}
        whileDrag={{scale: 1.02}}
        onDragStart={handleZIndexChange}
        indexStack={zindex.current}
    >
        {children}
    </StyledDraggableEntity>
  )
}

export const StyledDraggableEntity = React.memo(styled(motion.div)<{indexStack: number}>`
    position: absolute;
    z-index: ${(props)=>props.indexStack};
`);

export default React.memo(DraggableEntity)