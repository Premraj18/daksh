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

const App = () => {
  return (
    <MyState>
      <Cursor/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
