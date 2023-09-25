import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import User from './pages/User';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/contacts" Component={Contact} />
        <Route exact path="/users" Component={User} />
        <Route exact path="/" Component={Home} />
      </Routes>
    </Router>
  )
}

export default App