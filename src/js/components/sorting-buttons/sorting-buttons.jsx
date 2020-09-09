import React from "react";
import styled from "styled-components";
import {MainColor} from "../../consts/styles";

const List = styled.ul`
  display: inline-flex;
  font-size: 0;
  line-height: 0;
`;

const SortButton = styled.button`
  flex-basis: 11px;
  height: 15px;
  padding: 3px 5px;
  background: none;
  border: none;
  
  &:hover svg,
  &:focus svg {
    opacity: 0.5;
  }
  
  &:active svg {
    opacity: 1;
    fill: ${MainColor.SUCCESS}
  }
`;

const Svg = styled.svg`
  fill: ${MainColor.SECONDARY};
`;

const SortingButtons = () => {
  return (
    <List>
      <li>
        <SortButton>
          По возрастанию
          <Svg width="11" height="10">
            <use xlinkHref="#icon-up-dir"></use>
          </Svg>
        </SortButton>
      </li>
      <li>
        <SortButton>
          По убыванию
          <Svg width="11" height="10">
            <use xlinkHref="#icon-down-dir"></use>
          </Svg>
        </SortButton>
      </li>
    </List>
  );
};

export default SortingButtons;
