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
    
    return(
        <StyledStoredIngredient>
            <StyledQuantity>{quantity} {unit}</StyledQuantity>
            <StyledPortioning> {portioning}</StyledPortioning>
            <StyledName uppercase={uppercase}> {name}</StyledName>
        </StyledStoredIngredient>
    ) 
}

const StyledStoredIngredient = styled.span`
    font-size: var(--fs-body);
    word-spacing: .2rem;
`;

const StyledQuantity = styled.span`
    font-weight: var(--fw-bold);
    /* color: var(--theme-bar); */
    /* text-decoration: underline; */
`
const StyledPortioning = styled.span`
    font-style: italic;
    color: var(--theme-bar);
`
const StyledName = styled.span<{uppercase?: boolean}>`
    ${(props)=>props.uppercase && 'text-transform: uppercase'}
`

export default StoredIngredient