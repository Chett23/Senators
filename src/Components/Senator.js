import React from 'react';
import SenatorsJSON from '../senators.json';

import { MainCont } from './ComponentsMinor';
import { Button } from './ComponentsMinor';
import { SenatorLink } from './ComponentsMinor';


export default function Senator(props) {
  let { cspanid } = props.match.params;
  let senator = SenatorsJSON.reduce((senator, curr) => {
    if (curr.person.cspanid === parseInt(cspanid)) { senator = curr }
    return senator
  })
  return (
    <MainCont>
      <h1>{`Sen. ${senator.person.firstname} ${senator.person.lastname}`}</h1>
      <Button><SenatorLink to='/'>Go Back</SenatorLink></Button>
    </MainCont>
  )

}