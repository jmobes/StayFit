import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Workout from "./pages/Workout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/workout" component={Workout} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
