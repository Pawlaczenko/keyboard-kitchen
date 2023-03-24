import React, { FC } from 'react'
import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';

const Logo : FC = () => {
  return (
    <StyledLogoWrapper>
        <img src={logoImg} alt="Keyboard Kitchen Logo" />
    </StyledLogoWrapper>
  )
}

const StyledLogoWrapper = styled.figure`
    --logo-padding: 2rem;
    position: absolute;
    right: var(--logo-padding);
    top: var(--logo-padding);
`;

export default Logo