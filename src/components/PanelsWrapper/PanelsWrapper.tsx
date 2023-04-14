import { FC, useMemo, useRef } from 'react'
import styled from 'styled-components';
import backOpace from '../../assets/back_opace.png';
import { ContainerContext } from '../../context/ContainerContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import FridgePanel from '../Panels/FridgePanel/FridgePanel';
import WorktopPanel from '../Panels/WorktopPanel/WorktopPanel';
import CookbookPanel from '../Panels/CookbookPanel/CookbookPanel';
import RecipePanel from '../Panels/RecipePanel/RecipePanel';
import { DISHES } from '../../data/dishes';
import Dish from '../Dish/Dish';
import { PANELS } from '../../data/panels';

const PanelsWrapper : FC = () => {
    const appRef = useRef(null);
    const openedPanels = useSelector((state: RootState) => state.desktop.panels);
    const openedDishes = useSelector((state: RootState) => state.desktop.dishes);
    const openedRecipes = useSelector((state: RootState) => state.desktop.recipes);

    const dishArrays = useMemo(() => {
        return Object.keys(openedDishes).map((dishType: string) => {
          const dishT = DISHES[dishType.toUpperCase() as keyof typeof DISHES];
          const dishArray = openedDishes[dishT];
          if(dishArray) return dishArray.map((item) => <Dish key={`${dishType}-${item}`} id={item} type={dishT} />)
        })
      }, [openedDishes]);
      
  return (
    <StyledPanelsWrapper ref={appRef}>
        <ContainerContext.Provider value={appRef}>
          {openedPanels[PANELS.FRIDGE] && <FridgePanel />}
          {openedPanels[PANELS.WORKTOP] && <WorktopPanel />}
          {openedPanels[PANELS.COOKBOOK] && <CookbookPanel />}
          {openedRecipes.map(recipe => <RecipePanel recipeName={recipe} key={recipe} />)}
          { dishArrays }
        </ContainerContext.Provider>
      </StyledPanelsWrapper>
  )
}

const StyledPanelsWrapper = styled.div`
  position: relative;
  margin: 1rem;
  margin-right: 0;
  border-radius: .5rem;
  background: 
    url(${backOpace}) bottom left / 30% no-repeat,
    var(--gradient-background);
`;

export default PanelsWrapper