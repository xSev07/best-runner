import React from "react";
import styled from "styled-components";
import {MainColor} from "../../consts/styles";

const StyledButton = styled.button`
  opacity: 0;
  font-size: 0;
  line-height: 0;
  background-color: transparent;
  border: none;
  
  &:focus {
    opacity: 1;
  }
  &:active svg {
    stroke: ${MainColor.SUCCESS}
  }
`;

const Svg = styled.svg`
  stroke: ${MainColor.SECONDARY};
`;

const EditButton = () => {
  return (
    <StyledButton>
      Edit
      <Svg width="22" height="22">
        <use xlinkHref="#pen"></use>
      </Svg>
    </StyledButton>
  );
};

export default EditButton;
