import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Main from "./Containers/Main/Main";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Main} />
    </div>
  );
}

export default App;
