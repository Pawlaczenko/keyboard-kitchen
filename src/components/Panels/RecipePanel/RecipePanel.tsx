import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { IRecipe } from '../../../data/recipes';
import { FC } from 'react';
import styled from 'styled-components';
import List from '../../List/List';
import StoredIngredient from '../../StoredIngredient/StoredIngredient';

const RecipePanel:FC<{recipe:IRecipe}> = ({recipe}) => {
  const getIngredientsNames = ():React.ReactNode[] => {
    const ingredients: React.ReactNode[] = [];

    for(const step of recipe.steps){
      for(const ingredient of step.ingredients){
        if(typeof ingredient === 'object'){
          ingredients.push(<StoredIngredient uppercase={true} ingredient={ingredient} />);
        }
      }
    }
    return ingredients
  }
  return (
    <Panel title={`${recipe.name} RECIPE`} panelType={PANELS.RECIPE} >
        <StyledRecipeTitle>Ingredients:</StyledRecipeTitle>
        <List type="ul" items={getIngredientsNames()} />
        <StyledRecipeTitle>Instructions:</StyledRecipeTitle>
        <List type="ol" items={recipe.text} />
    </Panel>
  )
}

const StyledRecipeTitle = styled.h3`
  font-size: var(--fs-body);
  &:is(:not(:first-child)){
    margin-top: 2rem;
  }
`;

export default RecipePanel