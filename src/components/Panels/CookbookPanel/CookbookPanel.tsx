import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { RECIPES } from '../../../data/recipes';
import List from '../../List/List';
import { useDispatch } from 'react-redux';
import { toggleOpenPanel } from '../../../features/desktop/desktopSlice';
import React from 'react';

const CookbookPanel = () => {
  const dispatch = useDispatch();

  const handlePanelClose = () => {
    dispatch(toggleOpenPanel({
      panelType: PANELS.COOKBOOK,
      opened: false
    }))
  }
  
  const recipes = [...RECIPES.keys()].sort((a,b)=>a.localeCompare(b)); // Get all recipes names and sort them alphabetically
  return (
    <Panel title="Cookbook" panelType={PANELS.COOKBOOK} handlePanelClose={handlePanelClose}>
        <List type="ol" items={recipes} />
    </Panel>
  )
}

export default React.memo(CookbookPanel)