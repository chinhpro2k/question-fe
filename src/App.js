import './App.css';
import React from "react";
import Question from "./module/question/Question";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
          <BrowserRouter>
                  <Switch>
                      <Route  path='/' name='Buyer Layout' render={(props) => <Question {...props} />} />
                  </Switch>
          </BrowserRouter>
  );
}

export default App;
