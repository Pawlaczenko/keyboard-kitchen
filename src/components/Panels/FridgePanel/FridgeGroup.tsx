import React, { FC } from 'react'
import styled from 'styled-components';
import { IStoredIngredient, UNIT } from '../../../data/ingredients';
import { pluralize } from '../../../helpers/typography.helper';
import List from '../../List/List';
import StoredIngredient from '../../StoredIngredient/StoredIngredient';


interface IFridgeGroupProps {
    groupTitle: string,
    color: string,
    ingredients: IStoredIngredient[]
}

const FridgeGroup : FC<IFridgeGroupProps> = ({groupTitle, color, ingredients}) => {
  const groupStoredIngredients = ingredients.map(ingredient => <StoredIngredient ingredient={ingredient} />);
  return (
    <StyledIngredientsGroup>
        <StyledIngredientsHeading color={color}>{groupTitle}</StyledIngredientsHeading>
        <List type="ul" items={groupStoredIngredients} />
    </StyledIngredientsGroup>
  )
}

const StyledIngredientsGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledIngredientsHeading = styled.h3<{color: string}>`
  text-transform: uppercase;
  text-align:center;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  font-size: var(--fs-body);
  color: black;

  position: relative;
  margin-bottom: 1rem;
  background-color: var(--theme-hover);
  border-left: 1rem solid ${(props)=> props.color};
  border-right: 1rem solid transparent;
`;

export default FridgeGroup