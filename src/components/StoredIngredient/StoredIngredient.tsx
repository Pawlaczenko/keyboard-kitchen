import { FC } from 'react'
import { IStoredIngredient, UNIT } from '../../data/ingredients';
import { pluralize } from '../../helpers/typography.helper';
import styled from 'styled-components';

interface IStoredIngredientProps {
    ingredient: IStoredIngredient,
    uppercase?: boolean
}

const StoredIngredient : FC<IStoredIngredientProps> = ({ingredient,uppercase}) => {
    const quantity: number = ingredient.quantity;
    const unit: UNIT = ingredient.ingredient.unitOfMeasurement;
    const portioning : string = ingredient.portioned || "";
    const name: string = ingredient.ingredient.unitOfMeasurement === UNIT.COUNTABLE 
        ? pluralize(quantity,ingredient.ingredient.name)
        : ingredient.ingredient.name;
    
    return <StyledStoredIngredient uppercase={uppercase}>&nbsp;<b>{quantity}</b>{unit} {portioning} <span>{name}</span></StyledStoredIngredient>
}

const StyledStoredIngredient = styled.span<{uppercase?: boolean}>`
    font-size: var(--fs-body);
    word-spacing: .2rem;
    &>span{
        ${(props)=>props.uppercase && 'text-transform: uppercase'}
    }
`;

export default StoredIngredient