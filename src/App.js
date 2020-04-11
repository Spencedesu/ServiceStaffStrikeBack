import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Responses from "./pages/Responses";
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
import SayPiece from './pages/SayPiece'
// import FormSection from "./pages/FormSection";
import Main from "./pages/Main"
import "./App.css"
import ShareStory from './pages/ShareAStory';
import LineCook from './pages/LinecookConfessional';
import ServersHate from './pages/ServersHATE';

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
      </Route>
      <Route exact path="/piece">
        <SayPiece/>
      </Route>
      <Route exact path="/story">
        <ShareStory/>
      </Route>
      <Route exact path="/linecook">
        <LineCook/>
      </Route>
      <Route exact path ="/serversHate">
        <ServersHate/>
      </Route>
    </Switch>

    
  </Router>
  );
}

export default App;
