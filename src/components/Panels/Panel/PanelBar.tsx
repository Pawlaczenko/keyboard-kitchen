import React, { FC } from 'react'
import styled from 'styled-components';
import { flexCenter, flexStart } from '../../../styles/mixins';
import { FiX, FiMinus } from "react-icons/fi";

interface IPanelBarProps {
    barColor: string,
    buttonHoverColor: string,
    title: string,
    handlePointerDown: (event:React.PointerEvent<Element>)=>void;
}

const PanelBar : FC<IPanelBarProps> = ({barColor: primaryColor,buttonHoverColor: secondaryColor,title, handlePointerDown}) => {
  return (
    <StyledPanelBar barColor={primaryColor} hoverColor={secondaryColor} onPointerDown={handlePointerDown}>
        <Title>{title}</Title>
        <ButtonsWrapper>
            <BarButton><FiMinus /></BarButton>
            <BarButton><FiX /></BarButton>
        </ButtonsWrapper>
    </StyledPanelBar>
  )
}

const StyledPanelBar = styled.div<{barColor: string, hoverColor: string}>`
    --bar-size: 4rem;
    --bar-color: ${(props) => props.barColor};
    --hover-color: ${(props) => props.hoverColor};
    
    position: relative;
    height: var(--bar-size);
    padding-left: 2rem;
    
    background: var(--bar-color);
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
    background-color: var(--hover-color);
    cursor: pointer;

    &:hover {
        background: var(--bar-color);
    }
`;

export default PanelBar