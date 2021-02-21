import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Workout from "./pages/Workout";

const App = () => {
  const [token, setToken] = useState();
  const [error, setError] = useState();

  const login = async (email, password) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    try {
      const result = await fetch(
        "http://localhost:5000/api/authenticate",
        options
      );
      const responseData = await result.json();
      if (!result.ok) {
        throw new Error(responseData);
      }
      setToken(responseData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login login={login} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/workout">
          <Workout />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
