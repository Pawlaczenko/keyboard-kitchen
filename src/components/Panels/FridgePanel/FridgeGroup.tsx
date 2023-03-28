import React, { FC } from 'react'
import styled from 'styled-components';
import { IStoredIngredient, UNIT } from '../../../data/ingredients';
import { pluralize } from '../../../helpers/typography.helper';


interface IFridgeGroupProps {
    groupTitle: string,
    color: string,
    ingredients: IStoredIngredient[]
}

const FridgeGroup : FC<IFridgeGroupProps> = ({groupTitle, color, ingredients}) => {

  const getIngredientItem = (ingredient: IStoredIngredient) => {
    const quantity: number = ingredient.quantity;
    const unit: UNIT = ingredient.ingredient.unitOfMeasurement;
    const portioning : string = ingredient.portioned || "";
    const name: string = ingredient.ingredient.unitOfMeasurement === UNIT.COUNTABLE 
        ? pluralize(quantity,ingredient.ingredient.name)
        : ingredient.ingredient.name;
    
    return <StyledIngredientsItem>&nbsp;<b>{quantity}</b><i>{unit}</i> {portioning} {name}</StyledIngredientsItem>
  }

  return (
    <StyledIngredientsGroup>
        <StyledIngredientsHeading color={color}>{groupTitle}</StyledIngredientsHeading>
        <StyledIngredientsList>
            {
                ingredients.map(ingredient => getIngredientItem(ingredient))
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
    font-size: var(--fs-body);

    &::before {
        content: "-"
    }
`;

export default FridgeGroup