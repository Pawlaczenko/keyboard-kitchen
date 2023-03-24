import { FC } from "react"
import styled from "styled-components"
import Logo from "./components/Logo/Logo";
import GlobalStyles from "./styles/globalStyles";

const App : FC = () => {
  return (
    <StyledAppWrapper>
      <GlobalStyles />
      <Logo />
    </StyledAppWrapper>
  )
}

const StyledAppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App
