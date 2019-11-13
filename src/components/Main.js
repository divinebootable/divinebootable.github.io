import React from 'react';

import About from './About';
import Intro from './Intro';
import Contact from './Contact';
import Work from './Work';
import Resume from './Resume';
import {Switch, Route} from 'react-router-dom';

const Main = () =>(
  <Switch>
    <Route exact path="/"  component={Intro}/>
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Work} />
    <Route path="/resume" component={Resume} />
  </Switch>


)

export default Main;
