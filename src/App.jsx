import React from 'react'
import './App.css';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import MyState from './context/MyState';
import Cursor from './components/cursor/Cursor';
import Team from './pages/team/Team';

const App = () => {
  return (
    <MyState>
      <Cursor/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<Team />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
