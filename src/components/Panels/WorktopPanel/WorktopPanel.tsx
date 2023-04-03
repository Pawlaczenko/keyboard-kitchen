import React from 'react'
import Panel from '../Panel/Panel';
import { PANELS } from '../../../data/panels';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/mixins';
import StoredIngredient from '../../StoredIngredient/StoredIngredient';
import { toggleOpenPanel } from '../../../features/desktop/desktopSlice';

const WorktopPanel = () => {
  const worktopSelector = useSelector((state: RootState) => state.worktop);
  const dispatch = useDispatch();
  return (
    <Panel title='worktop' panelType={PANELS.WORKTOP} handlePanelClose={()=>dispatch(toggleOpenPanel(PANELS.WORKTOP))}>
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

export default React.memo(WorktopPanel)