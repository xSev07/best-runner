import React from "react";
import styled from "styled-components";
import {MainColor, NeutralColor, ScreenSize} from "../../consts/styles";
import EditButton from "../edit-button/edit-button.jsx";

const Container = styled.div`
  max-width: ${ScreenSize.DESKTOP};
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: ${ScreenSize.TABLET};
  margin-bottom: 10px;
  table-layout: fixed;
  border-collapse: collapse;
`;

const Row = styled.tr`
  &:nth-child(odd) {
    color: black;
    background: ${MainColor.SECONDARY};
    
    & td:nth-child(3) {
      color: ${MainColor.SECONDARY};
      background-color: ${NeutralColor.SECONDARY};
    }
  }
  
  &:last-child {
    & td:nth-child(3) {
      border-bottom: 1px solid ${NeutralColor.PRIMARY};
    }
  }
  
  &:hover button {
    opacity: 1;
  }
`;

const Cell = styled.td`
  padding: 5px;
  text-align: center;
  border: 1px solid ${NeutralColor.PRIMARY};
  
  &:nth-child(3) {
    border: none;
  }
  
  &:last-child {
    background: ${MainColor.PRIMARY};
    border: none;
  }
`;

const CellHeader = styled(Cell)`
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 15%;
  }
  &:nth-child(3) {
    width: 10%;
    border-top: 1px solid ${NeutralColor.PRIMARY};
  }
  &:nth-child(4) {
    width: 60%;
  }
  &:nth-child(5) {
    width: 5%;
  }
`;

const HiddenCell = styled(Cell)`
  font-size: 0;
  background-color: ${MainColor.PRIMARY};
  border: none;
`;

const SmallerText = styled.span`
  font-size: 0.75rem;
`;

const AddButton = styled.button`
  display: block;
  min-width: 35px;
  min-height: 35px;
  margin: 0 auto;
  padding: 5px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: ${MainColor.SECONDARY};
  background: ${MainColor.PRIMARY};
  border: 1px solid ${MainColor.SECONDARY};
  
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  
  &:active {
    opacity: 1;
    color: ${MainColor.SUCCESS};
    border-color: ${MainColor.SUCCESS};
  }
`;

const TrainingTable = () => {
  return (
    <Container>
      <Table>
        <caption className="visually-hidden">trainings</caption>
        <thead>
          <tr>
            <CellHeader as="th" scope="col" className="visually-hidden">Date</CellHeader>
            <CellHeader as="th" scope="col">Type</CellHeader>
            <CellHeader as="th" scope="col">Km</CellHeader>
            <CellHeader as="th" scope="col">Comment</CellHeader>
            <CellHeader as="th" scope="col" className="visually-hidden">Edit</CellHeader>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>
              01
              <SmallerText>aug</SmallerText>
            </Cell>
            <Cell>Run</Cell>
            <Cell>7</Cell>
            <Cell>Cross-country</Cell>
            <Cell>
              <EditButton/>
            </Cell>
          </Row>
          <Row>
            <Cell>02 <SmallerText>aug</SmallerText></Cell>
            <Cell>Cycling</Cell>
            <Cell>12</Cell>
            <Cell></Cell>
            <Cell>
              <EditButton/>
            </Cell>
          </Row>
          <Row>
            <HiddenCell>02 <SmallerText>aug</SmallerText></HiddenCell>
            <Cell>Walk</Cell>
            <Cell>3</Cell>
            <Cell></Cell>
            <Cell>
              <EditButton/>
            </Cell>
          </Row>
          <Row>
            <Cell>04 <SmallerText>aug</SmallerText></Cell>
            <Cell>Cycling</Cell>
            <Cell>10</Cell>
            <Cell></Cell>
            <Cell>
              <EditButton/>
            </Cell>
          </Row>
        </tbody>
      </Table>
      <AddButton>+</AddButton>
    </Container>
  );
};

export default TrainingTable;
