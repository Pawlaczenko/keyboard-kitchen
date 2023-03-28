import { FC, useRef, useState } from "react"
import styled from "styled-components"
import RecipePanel from "./components/Panels/RecipePanel/RecipePanel";
import { ContainerContext } from "./context/ContainerContext";
import GlobalStyles from "./styles/globalStyles";
import { DISHES } from './data/dishes';
import Dish from "./components/Dish/Dish";
import useContainer from './hooks/useContainer';
import FridgePanel from './components/Panels/FridgePanel/FridgePanel';

const App : FC = () => {
  const containerContext = useContainer();

  return (
    <ContainerContext.Provider value={containerContext}>
      <StyledAppWrapper ref={containerContext.constraints}>
        <GlobalStyles />

        {/* Panels */}

        <FridgePanel />
        <Dish type={DISHES.POT} />
        
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
