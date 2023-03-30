import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { RECIPES } from '../../../data/recipes';
import styled from 'styled-components';
import List from '../../List/List';

const RecipeBookPanel = () => {
  
  const recipes = [...RECIPES.keys()].sort((a,b)=>a.localeCompare(b)); // Get all recipes names and sort them alphabetically
  return (
    <Panel title="Recipe Book" panelTheme={PANEL_THEMES.get(PANELS.RECIPEBOOK)!}>
        <List type="ol" items={recipes} />
    </Panel>
  )
}

export default RecipeBookPanel