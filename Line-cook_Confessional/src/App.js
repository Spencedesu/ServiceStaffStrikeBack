import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
import FormSection from "./pages/FormSection";
import Nav from "./components/Nav";
import Main from "./pages/Main"

import "./App.css"

function App() {
  return (
  <Router>

<Switch>
      <Route exact path="/">
        <Main/>
      </Route>
    

      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      
      <Route exact path="/form">
        <Nav/>
        <FormSection/>
      </Route>
    </Switch>

    
  </Router>
  );
}

export default App;
