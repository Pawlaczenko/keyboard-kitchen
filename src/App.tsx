import { FC, useRef } from "react"
import styled from "styled-components"
import RecipePanel from "./components/Panels/RecipePanel/RecipePanel";
import { ConstraintsContext } from "./context/AppRefContext";
import GlobalStyles from "./styles/globalStyles";
import { DISHES } from './data/dishes';
import Dish from "./components/Dish/Dish";

const App : FC = () => {
  const appRef = useRef(null);
  return (
    <ConstraintsContext.Provider value={appRef}>
      <StyledAppWrapper ref={appRef}>
        <GlobalStyles />
        <Dish type={DISHES.BLENDER} />
        <Dish type={DISHES.POT} />
        <Dish type={DISHES.BOWL} />
        <Dish type={DISHES.PAN} />
        <Dish type={DISHES.PLATE} />
        <RecipePanel />
      </StyledAppWrapper>
    </ConstraintsContext.Provider>
  )
}

const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default App
