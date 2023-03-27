import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';

const RecipePanel = () => {
  return (
    <Panel title="Carbonara Recipe" panelTheme={PANEL_THEMES.get(PANELS.RECIPE)!}>
        siemka
    </Panel>
  )
}

export default RecipePanel