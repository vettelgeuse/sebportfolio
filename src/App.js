import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import logo from './images/like.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>This is Sebastian's Portfolio</h2>
        </p>
        <a
          className="App-link"
          href="/inside"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Everything you wanted to know about me!</h1>
        </a>(but were afraid to ask)
      </header>
    </div>
  );
}

export default App;
