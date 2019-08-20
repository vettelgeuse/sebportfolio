import React from 'react';
// import logo from './logo.svg';
import logo from './images/mountains.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This was Sebastian's Portfolio
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inside
        </a>
      </header>
    </div>
  );
}

export default App;