import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import landscape from './images/mountains.svg';
import './App.css';
export default function Inside(){
  return (
  <header className="Inside-header">
  <img src={landscape} className="landscape-logo" alt="logo" />
  <p>
    <h2>There's nothing below the surface :'(</h2>
  </p>
  <a>
    <h1>Ooops! I'm empty inside</h1>
  </a>(as a forest without animals)
</header>
  )
}