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
import Participation from './pages/participation/Participation';
import Achivement from './pages/achivement/Achivement';
import ScrollToTop from './pages/ScrollToTop';
import Gallery from './pages/Gallery/Gallery';

const App = () => {
  return (
    <MyState>
      <Cursor/>
      <Router>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="/participation" element={<Participation/>} />
          <Route path="/achivements" element={<Achivement/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
