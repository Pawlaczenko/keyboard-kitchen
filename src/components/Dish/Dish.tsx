import { motion } from 'framer-motion';
import React, { FC } from 'react'
import styled from 'styled-components'
import { useConstraintsContext } from '../../context/AppRefContext';
import { flexCenter } from '../../styles/mixins';
import { DISHES, dishImages } from '../../data/dishes';

export interface IDishProps {
  type: DISHES,
}

const Dish : FC<IDishProps> = ({type}) => {
  const constraints = useConstraintsContext();
  return (
    <StyledDishWrapper
      drag
      dragConstraints={constraints} 
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{scale: 1.05}}
    >
        <Title>{type}</Title>
        <DishBackground backImg={dishImages.get(type)!}>
          siemka
        </DishBackground>
    </StyledDishWrapper>
  )
}

const StyledDishWrapper = styled(motion.div)`
    --dish-size: 20rem;

    width: var(--dish-size);
    height: var(--dish-size);
    position: absolute;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
`;

const Title = styled.p`
    font-size: 2rem;
    text-align: center;
`;

const DishBackground = styled.figure<{backImg: string}>`
  width: 100%;
  height: 100%;
  background: url(${(props)=>props.backImg}) top/contain no-repeat;

  ${flexCenter};
`;

export default Dish