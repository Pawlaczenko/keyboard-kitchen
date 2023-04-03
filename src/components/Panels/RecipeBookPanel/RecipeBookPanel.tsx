import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { RECIPES } from '../../../data/recipes';
import List from '../../List/List';
import { useDispatch } from 'react-redux';
import { toggleOpenPanel } from '../../../features/desktop/desktopSlice';
import React from 'react';

const RecipeBookPanel = () => {
  const dispatch = useDispatch();

  const handlePanelClose = () => {
    dispatch(toggleOpenPanel({
      panelType: PANELS.RECIPEBOOK,
      opened: false
    }))
  }
  
  const recipes = [...RECIPES.keys()].sort((a,b)=>a.localeCompare(b)); // Get all recipes names and sort them alphabetically
  return (
    <Panel title="Recipe Book" panelType={PANELS.RECIPEBOOK} handlePanelClose={handlePanelClose}>
        <List type="ol" items={recipes} />
    </Panel>
  )
}

export default React.memo(RecipeBookPanel)