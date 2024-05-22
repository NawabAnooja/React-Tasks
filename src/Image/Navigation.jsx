// import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import Dashboard from './Dashboard';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Login from './Comp1';
 
 
 
const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Welcome</Link> */}
            <Link to="/">Home</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Home" element={<Home />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
 
export default Navigation;