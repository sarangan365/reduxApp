import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import User from './pages/User';
import userReducer from "./store/reducers/user";
const rootReducer = combineReducers({
  data: userReducer
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/contacts" Component={Contact} />
          <Route exact path="/users" Component={User} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App