import React from 'react'
import Panel from '../Panel/Panel';
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/mixins';
import StoredIngredient from '../../StoredIngredient/StoredIngredient';

const WorktopPanel = () => {
  const worktopSelector = useSelector((state: RootState) => state.worktop);
  return (
    <Panel title='worktop' panelTheme={PANEL_THEMES.get(PANELS.WORKTOP)!}>
        <StyledWorktopContainer>
            {
                worktopSelector.map(ingredient => {
                    return <StoredIngredient uppercase ingredient={ingredient} />
                })
            }
        </StyledWorktopContainer>
    </Panel>
  )
}

const StyledWorktopContainer = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenter};
    flex-direction: column;
`;

export default WorktopPanel