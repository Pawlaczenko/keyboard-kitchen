import { FC } from "react"
import styled from "styled-components"
import Panel from "./components/Panel/Panel";
import GlobalStyles from "./styles/globalStyles";

const App : FC = () => {
  return (
    <StyledAppWrapper>
      <GlobalStyles />

      <Panel />
    </StyledAppWrapper>
  )
}

const StyledAppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App
