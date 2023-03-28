import React, { FC } from 'react'
import styled from 'styled-components';
import { IStoredIngredient, UNIT } from '../../../data/ingredients';
import { pluralize } from '../../../helpers/typography.helper';
import StoredIngredient from '../../StoredIngredient/StoredIngredient';


interface IFridgeGroupProps {
    groupTitle: string,
    color: string,
    ingredients: IStoredIngredient[]
}

const FridgeGroup : FC<IFridgeGroupProps> = ({groupTitle, color, ingredients}) => {
  return (
    <StyledIngredientsGroup>
        <StyledIngredientsHeading color={color}>{groupTitle}</StyledIngredientsHeading>
        <StyledIngredientsList>
            {
                ingredients.map(ingredient => {
                  return (
                    <StyledIngredientsItem>
                      <StoredIngredient ingredient={ingredient} />
                    </StyledIngredientsItem>
                  )
                })
            }
        </StyledIngredientsList>
    </StyledIngredientsGroup>
  )
}

const StyledIngredientsGroup = styled.div`
  
`;

const StyledIngredientsHeading = styled.h3<{color: string}>`
  text-transform: uppercase;
  text-align:center;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  font-size: var(--fs-body);
  color: black;

  position: relative;
  background-color: var(--accent-color);
  border-left: 1rem solid ${(props)=> props.color};
  border-right: 1rem solid transparent;
`;

const StyledIngredientsList = styled.ul`
    padding: 1rem 1.5rem;
    list-style-type: none;
`;

const StyledIngredientsItem = styled.li`
    &::before {
        content: "-"
    }
`;

export default FridgeGroup