export enum PANELS {
    RECIPE, 
    FRIDGE
}

export interface IPanelTheme {
    panelColor: string,
    barColor: string,
    buttonHoverColor: string,
    ratio?: string
}

export const PANEL_THEMES = new Map<PANELS,IPanelTheme>([
    [
        PANELS.RECIPE,
        {
            panelColor: "var(--color-yellow)",
            barColor: "var(--color-primary)",
            buttonHoverColor: "var(--color-secondary)",
            ratio: "1.2/1"
        }
    ],
    [
        PANELS.FRIDGE,
        {
            panelColor: "#E8E8E8",
            barColor: "#CBCBCB",
            buttonHoverColor: "#8F8F8F",
            ratio: "1/1.5"
        }
    ],
])
