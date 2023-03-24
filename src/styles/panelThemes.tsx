import { PANELS } from '../data/panels';

export interface IPanelTheme {
    panelColor: string,
    barColor: string,
    buttonHoverColor: string
}

export const PANEL_THEMES = new Map<PANELS,IPanelTheme>([
    [
        PANELS.RECIPE,
        {
            panelColor: "var(--color-yellow)",
            barColor: "var(--color-primary)",
            buttonHoverColor: "var(--color-secondary)"
        }
    ]
])