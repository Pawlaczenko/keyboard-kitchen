import { FC, useRef, useState } from "react"
import styled from "styled-components"
import RecipePanel from "./components/Panels/RecipePanel/RecipePanel";
import { ContainerContext } from "./context/ContainerContext";
import GlobalStyles from "./styles/globalStyles";
import { DISHES } from './data/dishes';
import Dish from "./components/Dish/Dish";
import useContainer from './hooks/useContainer';
import FridgePanel from './components/Panels/FridgePanel/FridgePanel';
import WorktopPanel from "./components/Panels/WorktopPanel/WorktopPanel";
import RecipeBookPanel from './components/Panels/RecipeBookPanel/RecipeBookPanel';
import { RECIPES } from './data/recipes';

const App : FC = () => {
  const containerContext = useContainer();

  return (
    <ContainerContext.Provider value={containerContext}>
      <StyledAppWrapper ref={containerContext.constraints}>
        <GlobalStyles />

        {/* Panels */}

        <RecipeBookPanel />
        <RecipePanel recipe={RECIPES.get("Tomato Soup")!} />
        <RecipePanel recipe={RECIPES.get("Spaghetti Carbonara")!} />
        
        {/* /Panels */}
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
