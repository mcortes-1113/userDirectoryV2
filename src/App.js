import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeDir from "./pages/EmployeeDir";
import './App.css';
// import logo from './logo.svg';


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/directory" component={EmployeeDir} />
      </div>
    </Router>
    
  );
}

export default App;
