// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import MovieData from './Components/MovieData';
import CompanyInfo from './Components/CompanyInfo';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ background: '#f4f4f4', padding: '10px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/movie-data">Movie Data</Link>
            </li>
            <li>
              <Link to="/company-info">Company Info</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/movie-data" Component={MovieData} />
          <Route path="/company-info" Component={CompanyInfo} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
