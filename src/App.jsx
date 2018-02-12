import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Main from './pages/main';
import Barber from './pages/barber';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={ Main } />
          <Route exact path="/barber" component={ Barber } />
        </main>
      </div>
    );
  }
}

export default App;
