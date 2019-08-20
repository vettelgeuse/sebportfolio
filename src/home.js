import React from 'react';
import logo from './images/like.svg';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
export default function Home(){
  return (
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    <h2>This is Sebastian's Portfolio</h2>
  </p>
  <Link to ='/details'>
  <a
    className="App-link"
    // href="/details"
    // target="_blank"
    // rel="noopener noreferrer"
  >
    <h1>Everything you wanted to know about me!</h1>
  </a></Link>(but were afraid to ask)
</header>
  )
}
