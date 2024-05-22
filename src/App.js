// App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Image/Comp1';
import Home from './Image/Home';
// import Navigation from './Image/Navigation';
import Navigation from './Tasks/Day2/Navigation';
function App() {
  return (
    <Router>
    <Navigation/>
    </Router>
  );
}

export default App;
