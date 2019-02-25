import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherSearch from './containers/WeatherSearch';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={WeatherSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
