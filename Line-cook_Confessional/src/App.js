import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
import FormSection from "./pages/FormSection";
import Nav from "./components/Nav"

function App() {
  return (
  <Router>
    
    <Switch>
      <Route exact path="/">
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
