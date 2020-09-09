import React from "react";
import styled from "styled-components";
import {MainColor, ScreenSize} from "../../consts/styles";
import {typeFilters} from "../../consts/common";
import {transformToFirstCapitalSymbol} from "../../utils/common/common";

const Container = styled.div`
  display: flex;
  max-width: ${ScreenSize.DESKTOP};
  margin: 0 auto 40px;
`;

const List = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-left: 30px;
`;

const Item = styled.li`
  margin-right: 30px;
`;

const Label = styled.label`
  position: relative;
  padding-right: 30px;
  
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    right: 4px;
    width: 15px;
    height: 15px;
    border: 2px solid ${MainColor.SECONDARY};
    border-radius: 50%;
    background-color: ${MainColor.SECONDARY};
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    color: ${MainColor.SUCCESS};
  }
`;

const FilterInput = styled.input.attrs((props) => ({
  value: props.id,
  type: `radio`,
  name: `type_filter`,
  className: `visually-hidden`,
}))`
  &:checked ~ ${Label}::after {
    background-color: ${MainColor.PRIMARY};
  }
  
  &:focus ~ ${Label} {
    color: ${MainColor.SUCCESS};
  }
`;

const generateFilters = (value, isActive) => {
  return (
    <Item key={value}>
      <FilterInput id={value} defaultChecked={isActive}/>
      <Label htmlFor={value}>{transformToFirstCapitalSymbol(value)}</Label>
    </Item>
  );
};

const TypeFilter = () => {
  return (
    <Container>
      <p>Filter:</p>
      <List>
        {typeFilters.map((it, index) => generateFilters(it, index === 0))}
      </List>
    </Container>
  );
};

export default TypeFilter;
