import Panel from './Panels/Panel/Panel'
import { PANEL_THEMES } from '../styles/panelThemes';
import { PANELS } from '../data/panels';

const RecipePanel = () => {
  return (
    <Panel title="Carbonara Recipe" panelTheme={PANEL_THEMES.get(PANELS.RECIPE)!}>
        siemka
    </Panel>
  )
}

export default RecipePanel