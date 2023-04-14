import { FC } from "react"
import styled from "styled-components"
import GlobalStyles from "./styles/globalStyles";
import Console, { StyledConsole } from "./components/Console/Console";
import { motion } from "framer-motion";
import PanelsWrapper from "./components/PanelsWrapper/PanelsWrapper";

const App : FC = () => {
  return (
    <StyledAppWrapper>
      <GlobalStyles />
      <PanelsWrapper />
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

export default App
