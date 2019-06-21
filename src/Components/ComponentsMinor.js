import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Row = styled.div`
display: flex;
flex-direction: row;
`;

export const Col = styled.div`
display: flex;
flex-direction: Column;
`;

export const MainCont = styled(Col)`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

export const SenatorList = styled.ul`
  list-style: none;
  margin: 20px auto;
  padding: 0;
`;

export const SenatorListItem = styled.div`
  margin: 10px;
  color: black;
  font-size: 18pt;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  type: text;
  width: 100%;
`;
export const SenatorLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Button = styled(Col)`
  background-color: #B9B5B6;
  width: 100px;
  height: 45px;
  border-radius: 10px;
  justify-content: space-around;
  `;

export const TitleMain = styled.h1`
  margin: 15px;
  padding: 5px;
  font-size: 24pt;
`;

export const TitleMinor = styled.h5`
  color: #A4A4A4;
  margin: 5px;
  font-size: 8pt;
`;