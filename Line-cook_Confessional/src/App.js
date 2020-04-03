import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
