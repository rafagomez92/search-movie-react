import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
// import { render } from '@testing-library/react';

class App extends Component { 
  render() {    
    return (
      <Router>      
      <div className="App">
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/detail/:movieId" component={Detail} />
           <Route component={NotFound} />
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
