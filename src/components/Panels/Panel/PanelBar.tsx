import React, { FC } from 'react'
import styled from 'styled-components';
import { flexCenter, flexStart } from '../../../styles/mixins';
import { FiX } from "react-icons/fi";
import { PANELS } from '../../../data/panels';

interface IPanelBarProps {
    title: string,
    handlePointerDown: (event:React.PointerEvent<Element>)=>void;
    handlePanelClose?: ()=>void
}

const PanelBar : FC<IPanelBarProps> = ({title, handlePointerDown,handlePanelClose}) => {
  return (
    <StyledPanelBar onPointerDown={handlePointerDown}>
        <Title>{title}</Title>
        <ButtonsWrapper>
            <BarButton onClick={handlePanelClose}><FiX /></BarButton>
        </ButtonsWrapper>
    </StyledPanelBar>
  )
}

const StyledPanelBar = styled.div`
    --bar-size: 4rem;
    
    position: relative;
    height: var(--bar-size);
    padding-left: 2rem;
    
    background: var(--theme-bar);
    text-transform: uppercase;

    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`;

const Title = styled.p`
    text-transform: uppercase;
    white-space: nowrap;
    height: 100%;
    color: var(--theme-text);
    font-weight: var(--fw-bold);

    ${flexStart};
`;

const ButtonsWrapper = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    ${flexCenter};
`;

const BarButton = styled.button`
    height: 100%;
    width: var(--bar-size);
    ${flexCenter};

    border: none;
    background-color: var(--theme-hover);
    cursor: pointer;

    &:hover {
        background: var(--theme-bar);
    }
`;

export default PanelBar