import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Home />
    )
  }  
}

export default App;
