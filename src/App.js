import React from 'react';
// import React, { useState, useEffect } from 'react';
import Senators from './Components/Senators.js';
import Senator from './Components/Senator.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Senators} />
        <Route exact path="/senator/:cspanid" component={Senator} />
      </Switch>
    </Router>
  );
}

export default App;