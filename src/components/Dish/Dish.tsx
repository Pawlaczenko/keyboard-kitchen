import { motion } from 'framer-motion';
import { FC } from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins';
import { DISHES, DISH_THEMES, IDishTheme } from '../../data/dishes';
import DraggableEntity from '../DraggableEntity/DraggableEntity';
import React from 'react';
import List from '../List/List';

export interface IDishProps {
  type: DISHES,
  id: number
}

const Dish : FC<IDishProps> = React.memo(({type, id}) => {
  const dishTheme : IDishTheme = DISH_THEMES.get(type)!;
  return (
    <DraggableEntity>
      <StyledDishWrapper>
        <Title>{type} {id}</Title>
        <DishBackground backImg={dishTheme.image} color={dishTheme.textColor}>
        </DishBackground>
      </StyledDishWrapper>
    </DraggableEntity>
  )
});

const StyledDishWrapper = styled(motion.div)`
  --dish-size: 22rem;

  width: var(--dish-size);
  height: var(--dish-size);
  display: flex;
  flex-direction: column;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Title = styled.p`
    font-size: var(--fs-body);
    text-align: center;
    text-transform: uppercase;
`;

const DishBackground = styled.figure<{backImg: string, color: string}>`
  width: 100%;
  flex: 1;
  background: url(${(props)=>props.backImg}) center/contain no-repeat;
  color: ${(props) => props.color};

  ${flexCenter};
`;

export default Dish