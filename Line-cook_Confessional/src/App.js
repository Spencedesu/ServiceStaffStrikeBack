import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Responses from "./pages/Responses";
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
// import FormSection from "./pages/FormSection";
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
      
      <Route exact path="/responses">
        <Responses/>
    {/* this where i need to put the new review save
     */}
      </Route>
    </Switch>

    
  </Router>
  );
}

export default App;
