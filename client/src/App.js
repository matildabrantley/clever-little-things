import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LabPage from './pages/LabPage';
import EcosystemPage from './pages/EcosystemPage';
import GamePage from './pages/GamePage';
import image from './assets/banner3.jpg';


function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/ecosystem' component={EcosystemPage} />
          <Route exact path='/lab' component={LabPage} />
          <Route exact path='/game' component={GamePage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
