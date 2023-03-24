import { FC, useRef } from "react"
import styled from "styled-components"
import Panel from "./components/Panels/Panel/Panel";
import RecipePanel from "./components/RecipePanel";
import { ConstraintsContext } from "./context/AppRefContext";
import GlobalStyles from "./styles/globalStyles";

const App : FC = () => {
  const appRef = useRef(null);
  return (
    <ConstraintsContext.Provider value={appRef}>
      <StyledAppWrapper ref={appRef}>
        <GlobalStyles />

        <RecipePanel />
      </StyledAppWrapper>
    </ConstraintsContext.Provider>
  )
}

const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App
