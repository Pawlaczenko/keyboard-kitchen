import { motion } from 'framer-motion';
import { FC } from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins';
import { DISHES, DISH_THEMES, IDishTheme } from '../../data/dishes';
import DraggableEntity from '../DraggableEntity/DraggableEntity';

export interface IDishProps {
  type: DISHES,
}

const Dish : FC<IDishProps> = ({type}) => {
  const dishTheme : IDishTheme = DISH_THEMES.get(type)!;
  return (
    <DraggableEntity>
      <StyledDishWrapper>
        <Title>{type}</Title>
        <DishBackground backImg={dishTheme.image} color={dishTheme.textColor}>
        </DishBackground>
      </StyledDishWrapper>
    </DraggableEntity>
  )
}

const StyledDishWrapper = styled(motion.div)`
    --dish-size: 20rem;

    min-width: var(--dish-size);
    height: var(--dish-size);
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
  height: 100%;
  background: url(${(props)=>props.backImg}) center/contain no-repeat;
  color: ${(props) => props.color};

  ${flexCenter};
`;

export default Dish