import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import backOpace from './assets/back_opace.png';
import styled from "styled-components"
import RecipePanel from "./components/Panels/RecipePanel/RecipePanel";
import { ContainerContext, IContainerContext } from "./context/ContainerContext";
import GlobalStyles from "./styles/globalStyles";
import Dish from "./components/Dish/Dish";
import FridgePanel from './components/Panels/FridgePanel/FridgePanel';
import WorktopPanel from "./components/Panels/WorktopPanel/WorktopPanel";
import RecipeBookPanel from './components/Panels/RecipeBookPanel/RecipeBookPanel';
import Console, { StyledConsole } from "./components/Console/Console";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "./app/store";
import { PANELS } from "./data/panels";
import { DISHES } from './data/dishes';
import { motion } from "framer-motion";

const App : FC = () => {
  const appRef = useRef(null);
  const openedPanels = useSelector((state: RootState) => state.desktop);

  return (
    <StyledAppWrapper>
      <GlobalStyles />
      <StyledPanelsWrapper ref={appRef}>
        <ContainerContext.Provider value={appRef}>
          {openedPanels.panels[PANELS.FRIDGE] && <FridgePanel />}
          {openedPanels.panels[PANELS.WORKTOP] && <WorktopPanel />}
          {openedPanels.panels[PANELS.RECIPEBOOK] && <RecipeBookPanel />}
          {openedPanels.recipes.map(recipe => <RecipePanel recipeName={recipe} />)}
          {
            Object.keys(openedPanels.dishes).map((dishType: string) => {
              const dishT = DISHES[dishType.toUpperCase() as keyof typeof DISHES];
              const dishArray = openedPanels.dishes[dishT];
              if(dishArray) return dishArray.map((item,index) => <Dish key={Math.random()} id={item} type={dishT} />)
            })
          }
        </ContainerContext.Provider>
      </StyledPanelsWrapper>
      <Console />
    </StyledAppWrapper>
  )
}

const StyledAppWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 25%;
`;

const StyledPanelsWrapper = styled.div`
  position: relative;
  margin: 1rem;
  margin-right: 0;
  border-radius: .5rem;
  background: 
    url(${backOpace}) bottom left / 30% no-repeat,
    var(--gradient-background);
`;
export default App
