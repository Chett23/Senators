import React from 'react';
import SenatorsJSON from '../senators.json';
import styled from 'styled-components';

import { MainCont } from './ComponentsMinor';
import { Button } from './ComponentsMinor';
import { SenatorLink } from './ComponentsMinor';
import { SenatorList } from './ComponentsMinor';
import { SenatorListItem } from './ComponentsMinor';

const BodyText = styled.span`
  margin: 10px auto;
  text-align: left;
`;

const SenatorInfoListItem = styled(SenatorListItem)`
  margin: 5px auto;
  font-size: 12pt;
  font-weight: normal;
`;

export default function Senator(props) {
  let { cspanid } = props.match.params;
  let senator = SenatorsJSON.reduce((senator, curr) => {
    if (curr.person.cspanid === parseInt(cspanid)) { senator = curr }
    return senator
  })
  return (
    <MainCont>
      <h1>{`Sen. ${senator.person.firstname} ${senator.person.lastname}`}</h1>
      <BodyText>
        {
          `Sen. ${senator.person.firstname} ${senator.person.lastname} is the ${senator.description}. More info about about Sen. ${senator.person.lastname} includes:`
        }
        <SenatorList>
          <SenatorInfoListItem>{`First Name: ${senator.person.firstname}`}</SenatorInfoListItem>
          <SenatorInfoListItem>{`Last Name: ${senator.person.lastname}`}</SenatorInfoListItem>
          <SenatorInfoListItem>{`Middle Name: ${senator.person.middlename ? senator.person.middlename : 'N/A'}`}</SenatorInfoListItem>
          <SenatorInfoListItem>{`Gender: ${senator.person.gender}`}</SenatorInfoListItem>
          <SenatorInfoListItem>{`Party: ${senator.party}`}</SenatorInfoListItem>
        </SenatorList>
      </BodyText>
      <SenatorLink to='/' style={{ alignSelf: 'flex-end' }}><Button>Go Back</Button></SenatorLink>
    </MainCont>
  )

}