import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './home';
import Inside from './inside';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/details' component={Inside} />
        {/* <Home/>
        <Inside/> */}
      </HashRouter>
    </div>
  );
}

export default App;
