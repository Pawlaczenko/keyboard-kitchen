export enum PANELS {
    RECIPE="recipe", 
    FRIDGE="fridge",
    WORKTOP="worktop",
    RECIPEBOOK="recipe book",
}

export interface IPanelTheme {
    panelColor: string,
    barColor: string,
    buttonHoverColor: string,
    textColor?: string,
    ratio?: string
}

export const getPanelByName = (name: string) : PANELS => {
    const panelName = name.toUpperCase().replace(" ","") as keyof typeof PANELS;
    return PANELS[panelName];
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
            panelColor: "#F0EBE3",
            barColor: "#7D9D9C",
            buttonHoverColor: "#E4DCCF",
            ratio: "1/1.5"
        }
    ],
    [
        PANELS.WORKTOP,
        {
            panelColor: "#D9B26E",
            barColor: "#9C563D",
            buttonHoverColor: "#654534",
            ratio: "1.5/1"
        }
    ],
    [
        PANELS.RECIPEBOOK,
        {
            panelColor: "#EDF1D6",
            barColor: "#609966",
            buttonHoverColor: "#9DC08B",
            ratio: "1/1.2"
        }
    ]
]);