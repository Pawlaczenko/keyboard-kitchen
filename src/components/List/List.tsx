import React, { FC } from 'react'
import styled from 'styled-components';

interface IListProps {
    type: "ul" | "ol",
    items: string[] | React.ReactNode[]
}

const List : FC<IListProps> = ({type,items}) => {
  return (
    <StyledList as={type}>
        {
            items.map((item,index) => <StyledListItem key={index}>{item}</StyledListItem>)
        }
    </StyledList>
  )
}

const StyledList = styled.ol`
  padding: 0;
  list-style-position: inside;
`;

const StyledListItem = styled.li`
  &::marker {
    font-weight: var(--fw-bold);
    color: var(--theme-bar);
  }
`

export default List