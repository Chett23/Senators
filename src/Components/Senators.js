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
  const [filterBy, setfilterBy] = useState({ party: '', gender: '', seniority: '' })
  const [filtered, setFiltered] = useState(SenatorsJSON)

  const handleChange = (e) => {
    if (e.target.value !== '-') {
      let filterByNew = filterBy
      filterByNew[e.target.title] = e.target.value
      setfilterBy(filterByNew)
    } else if (e.target.value === '-') {
      let filterByNew = filterBy
      filterByNew[e.target.title] = null
      setfilterBy(filterByNew)
    }
    // initializing filteredTemp to SenatorsJSON resets the filter with every change to make it the most accurate.
    let filteredTemp = SenatorsJSON
    if (filterBy.party) {filteredTemp = filteredTemp.filter(senator => senator.party === filterBy.party)}
    if (filterBy.gender) {filteredTemp = filteredTemp.filter(senator => senator.person.gender === filterBy.gender)}
    if (filterBy.seniority) {filteredTemp = filteredTemp.filter(senator => senator.senator_rank === filterBy.seniority)}

    setFiltered(filteredTemp)
  }

  return (
    <MainCont>
      <TitleMain>Senators of the USA</TitleMain>
      <Row>
        <SearchBar placeholder={'Search by Name, St, Gender, etc.'} value={search} title={'search'} onChange={(e) => setSearch(e.target.value.toLowerCase())}></SearchBar>
      </Row>
      <SenatorList>
        <FilterRow>
          <FilterTitle>filter by: </FilterTitle>
          <FilterSelect title={'party'} onChange={handleChange}>
            <option value={null} hidden selected disabled>Party</option>
            <option value={null}>-</option>
            <option value={'Democrat'}>Democrat</option>
            <option value={'Republican'}>Republican</option>
            <option value={'Independent'}>Independant</option>
          </FilterSelect>
          <FilterSelect title={'gender'} onChange={handleChange}>
            <option hidden selected disabled>Gender</option>
            <option >-</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </FilterSelect>
          <FilterSelect title={'seniority'} onChange={handleChange}>
            <option value={null} hidden selected disabled>Seniority</option>
            <option value={null}>-</option>
            <option value={'senior'}>Senior</option>
            <option value={'junior'}>Junior</option>
          </FilterSelect>
        </FilterRow>
        <TitleMinor>List as of Jan. 2019</TitleMinor>
        {
          filtered.filter(senator => {
            return senator.person.firstname.toLowerCase().includes(search) ||
              senator.person.lastname.toLowerCase().includes(search) ||
              senator.party.toLowerCase().includes(search) ||
              senator.description.toLowerCase().includes(search)
          }).map(senator => {
            let { cspanid } = senator.person
            return <SenatorLink to={`/senator/${cspanid}`} key={cspanid}>
              <SenatorListItem>{`${senator.person.name}`}</SenatorListItem>
            </SenatorLink>
          })
        }
      </SenatorList>
    </MainCont>
  );
}

// import React, { useState } from 'react';
// import SenatorsJSON from '../senators.json';
// import styled from 'styled-components';

// import { MainCont } from './ComponentsMinor';
// import { Row } from './ComponentsMinor';
// // import { Col } from './ComponentsMinor';
// import { SenatorList } from './ComponentsMinor';
// import { SenatorListItem } from './ComponentsMinor';
// import { SearchBar } from './ComponentsMinor';
// import { SenatorLink } from './ComponentsMinor';
// import { TitleMain } from './ComponentsMinor';
// import { TitleMinor } from './ComponentsMinor';


// const FilterSelect = styled.select`
//   margin: 10px 30px;
//   flex-wrap: wrap;
//   height: 20px;
//   width: 85px;
// `;

// const FilterRow = styled(Row)`
//  justify-content: center;
// `;

// const FilterTitle = styled.span`
//   margin: 10px;
//   color: #A4A4A4;
// `;


// export default function Senators() {
//   const [search, setSearch] = useState('')
//   // const [partyFilter, setPartyFilter] = useState('')
//   // const [genderFilter, setGenderFilter] = useState('')
//   // const [rankFilter, setRankFilter] = useState('')
//   const [filterBy, setFilterBy] = useState({PartyFilter: '', GenderFilter: '', RankFilter: ''})
//   const [filtered, setFiltered] = useState(SenatorsJSON)

//   const handleChange = (e) => {
//     // if (e.target.value !== '-') {
//     //   let filterBy = 'set' + e.target.title
//     //   console.log(filterBy)
//     //   if (filterBy === 'setPartyFilter')  {setPartyFilter(e.target.value)}
//     //   if (filterBy === 'setGenderFilter')  {setGenderFilter(e.target.value)}
//     //   if (filterBy === 'setRankFilter')  {setRankFilter(e.target.value)}
//     //   console.log(filtered.filter(senator => senator.party === partyFilter))
//     //   // console.log('party ' + partyFilter)
//     //   // console.log('gender ' + genderFilter)
//     //   // console.log('rank ' + rankFilter)
//     // } else if (e.target.value === '-') {
      
//     // }

//     if (e.target.value !== '-') {
//       let filterByNew = filterBy
//       filterByNew[e.target.title] = e.target.value
//       setFilterBy(filterByNew)
//     } else if (e.target.value === '-') {
//       let filterByNew = filterBy
//       filterByNew[e.target.title] = null
//       setFilterBy(filterByNew)
//     }

    // setFiltered(filterBy.Partyfilter && filtered.filter(senator => senator.party === filterBy.PartyFilter))
    // setFiltered(filterBy.GenderFilter && filtered.filter(senator => senator.person.gender === filterBy.GenderFilter))
    // setFiltered(filterBy.RankFilter && filtered.filter(senator => senator.senator_rank === filterBy.RankFilter))
//     console.log(filtered[0].person.name)
//     // let filteredNew = filterBy[e.target.title] ? 
//     //   filtered.filter(senator => senator[e.target.title] === e.target.value)
//     //   : 
      

//     // '' ? console.log(true) : console.log(false)

//     // let filteredNew = SenatorsJSON.filter(senator => {
//     //   return (filterBy.party && senator.party.includes(filterBy.party)) &&
//     //     (filterBy.gender && senator.person.gender === filterBy.gender) &&
//     //     (filterBy.senator_rank && senator.senator_rank.includes(filterBy.senator_rank))
//     // })
//     // setFiltered(filteredNew)
//   }

//   return (
//     <MainCont>
//       <TitleMain>Senators of the USA</TitleMain>
//       <Row>
//         <SearchBar placeholder={'Search by Name, St, Gender, etc.'} value={search} title={'search'} onChange={(e) => setSearch(e.target.value.toLowerCase())}></SearchBar>
//       </Row>
//       <SenatorList>
//         <FilterRow>
//           <FilterTitle>filter by: </FilterTitle>
//           <FilterSelect title={'PartyFilter'} onChange={handleChange}>
//             <option value={null} hidden selected disabled>Party</option>
//             <option value={null}>-</option>
//             <option value={'Democrat'}>Democrat</option>
//             <option value={'Republican'}>Republican</option>
//             <option value={'Independent'}>Independant</option>
//           </FilterSelect>
//           <FilterSelect title={'GenderFilter'} onChange={handleChange}>
//             <option hidden selected disabled>Gender</option>
//             <option value={null}>-</option>
//             <option value={'male'}>Male</option>
//             <option value={'female'}>Female</option>
//           </FilterSelect>
//           <FilterSelect title={'RankFilter'} onChange={handleChange}>
//             <option value={null} hidden selected disabled>Seniority</option>
//             <option value={null}>-</option>
//             <option value={'senior'}>Senior</option>
//             <option value={'junior'}>Junior</option>
//           </FilterSelect>
//         </FilterRow>
//         <TitleMinor>List as of Jan. 2019</TitleMinor>
//         {
//           filtered.filter(senator => {
//             return senator.person.firstname.toLowerCase().includes(search) ||
//               senator.person.lastname.toLowerCase().includes(search) ||
//               senator.party.toLowerCase().includes(search) ||
//               senator.description.toLowerCase().includes(search)
//           }).map(senator => {
//             let { cspanid } = senator.person
//             return <SenatorLink to={`/senator/${cspanid}`} key={cspanid}>
//               <SenatorListItem>{`${senator.person.name}`}</SenatorListItem>
//             </SenatorLink>
//           })
//         }
//       </SenatorList>
//     </MainCont>
//   );
// }