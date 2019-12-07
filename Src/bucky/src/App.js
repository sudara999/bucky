import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/main">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    )
  }  
}

var backgroundSignUp = {
	backgroundColor: "#DCDCDC"
}

export default App;
