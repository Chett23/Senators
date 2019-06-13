import React, { useState } from 'react';
import SenatorsJSON from '../senators.json';
import styled from 'styled-components';

import { MainCont } from './ComponentsMinor';
import { Row } from './ComponentsMinor';
// import { Col } from './ComponentsMinor';
import { SenatorList } from './ComponentsMinor';
import { SenatorListItem } from './ComponentsMinor';
import { SearchBar } from './ComponentsMinor';
import { SenatorLink } from './ComponentsMinor';
import { TitleMain } from './ComponentsMinor';
import { TitleMinor } from './ComponentsMinor';


const FilterSelect = styled.select`
  margin: 10px 30px;
  flex-wrap: wrap;
  height: 20px;
  width: 85px;
`;

const FilterRow = styled(Row)`
 justify-content: center;
`;

const FilterTitle = styled.span`
  margin: 10px;
  color: #A4A4A4;
`;


export default function Senators() {
  const [search, setSearch] = useState('')
  const [filterSelect, setFilterSelect] = useState(null)
  const [filterBy, setFilterBy] = useState({})

  const handleChange = (e) => {
    console.log(e.target.value)
    // have the dash be the default null value so if "-" then filter all of that property else filter by selected value.
    //filter state object that filters by all filters

    //in the last filter add orr opperands the get included if the corresonding filterfieldvalue is not "-"

    let {[e.target.title]: temp, ...editedFilterObj} = filterBy;
    e.target.value !== '-' ? setFilterBy({[e.target.title]: e.target.value, ...filterBy}) : setFilterSelect({[e.target.title]: editedFilterObj})
    // search && setFilterBy(search);
    // console.log(search)
    console.log(filterBy)
    console.log(editedFilterObj)
    console.log(temp)
  }

  return (
    <MainCont>
      <TitleMain>Senators of the USA</TitleMain>
      <Row>
        <SearchBar placeholder={'Search by Name, St, Gender, etc.'} value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}></SearchBar>
      </Row>
      <SenatorList>
        <FilterRow>
          <FilterTitle>filter by: </FilterTitle>
          <FilterSelect title={'party'} onChange={handleChange}>
            <option value={null} hidden selected disabled>Party</option>
            <option value={'null'}>-</option>
            <option value={'Democrat'}>Democrat</option>
            <option value={'Republican'}>Republican</option>
            <option value={'Independant'}>Independant</option>
          </FilterSelect>
          <FilterSelect>
            <option value={null} hidden selected disabled>Gender</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </FilterSelect>
          <FilterSelect>
            <option value={null} hidden selected disabled>Seniority</option>
            <option value={'senior'}>Senior</option>
            <option value={'junior'}>Junior</option>
          </FilterSelect>
        </FilterRow>
        <TitleMinor>List as of Jan. 2019</TitleMinor>
        {
          filterSelect ?
          <h1>filter Applied</h1>
          :
          search === '' ?
            SenatorsJSON.map(senator => {
              let { cspanid } = senator.person
              return <SenatorLink to={`/senator/${cspanid}`} >
                <SenatorListItem>{`${senator.person.name}`}</SenatorListItem>
              </SenatorLink>
            })
            :
            SenatorsJSON.filter(senator => {
              return senator.person.firstname.toLowerCase().includes(search) ||
                senator.person.lastname.toLowerCase().includes(search) ||
                senator.party.toLowerCase().includes(search) ||
                senator.description.toLowerCase().includes(search) ||
                senator.person.gender.toLowerCase().includes(search) ||
                senator.person.cspanid.toString().includes(search)
            }).map((senator) => {
              let { cspanid } = senator.person
              return <SenatorLink to={`/senator/${cspanid}`} >
                <SenatorListItem>{`${senator.person.name}`}</SenatorListItem>
              </SenatorLink>
            })
        }
      </SenatorList>
    </MainCont>
  );
}