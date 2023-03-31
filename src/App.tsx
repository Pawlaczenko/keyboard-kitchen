import { FC, useRef, useState } from "react"
import styled from "styled-components"
import RecipePanel from "./components/Panels/RecipePanel/RecipePanel";
import { ContainerContext } from "./context/ContainerContext";
import GlobalStyles from "./styles/globalStyles";
import Dish from "./components/Dish/Dish";
import useContainer from './hooks/useContainer';
import FridgePanel from './components/Panels/FridgePanel/FridgePanel';
import WorktopPanel from "./components/Panels/WorktopPanel/WorktopPanel";
import RecipeBookPanel from './components/Panels/RecipeBookPanel/RecipeBookPanel';
import Console from "./components/Console/Console";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { PANELS } from "./data/panels";

const App : FC = () => {
  const containerContext = useContainer();
  const openedPanels = useSelector((state: RootState) => state.desktop.panels);

  return (
    <ContainerContext.Provider value={containerContext}>
      <StyledAppWrapper ref={containerContext.constraints}>
        <GlobalStyles />
        <Console />
        {openedPanels[PANELS.FRIDGE] && <FridgePanel />}
        {openedPanels[PANELS.WORKTOP] && <WorktopPanel />}
        {openedPanels[PANELS.RECIPEBOOK] && <RecipeBookPanel />}
      </StyledAppWrapper>
    </ContainerContext.Provider>
  )
}

const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default App
