import React from "react";
import styled from "styled-components";
import {MainColor, NeutralColor, Size} from "../../consts/styles";

const Container = styled.div`
  max-width: ${Size.DESKTOP_WIDTH};
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
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
`;

const Cell = styled.td`
  padding: 5px;
  text-align: center;
  border: 1px solid ${NeutralColor.PRIMARY};
  
  &:nth-child(3) {
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
    width: 65%;
  }
`;

const HiddenCell = styled(Cell)`
  font-size: 0;
  background-color: ${MainColor.PRIMARY};
  border: none;
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
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>01 <span>aug</span></Cell>
            <Cell>Run</Cell>
            <Cell>7</Cell>
            <Cell>Cross-country</Cell>
          </Row>
          <Row>
            <Cell>02 <span>aug</span></Cell>
            <Cell>Cycling</Cell>
            <Cell>12</Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <HiddenCell>02 <span>aug</span></HiddenCell>
            <Cell>Walk</Cell>
            <Cell>3</Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <Cell>04 <span>aug</span></Cell>
            <Cell>Cycling</Cell>
            <Cell>10</Cell>
            <Cell></Cell>
          </Row>
        </tbody>
      </Table>
      <button>+</button>
    </Container>
  );
};

export default TrainingTable;
