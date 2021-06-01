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
import History from "./pages/History";
import Progress from "./pages/Progress";
import Records from "./pages/Records";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import HomeLogout from "./components/HomeLogout";

const App = () => {
  const [token, setToken] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    if (!email || !password) {
      setError("Please enter email and password");
    }
    setLoading(true);
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
      setToken(responseData.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: responseData.userId,
          token: responseData.token,
        })
      );
      setError(null);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
      return false;
    }
    setLoading(false);
    return true;
  };

  const logout = () => {
    setToken(null);
    setError(null);
    localStorage.removeItem("user");
  };

  return (
    <React.Fragment>
      <Router>
        <HomeLogout logout={logout} />
        <Header />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login error={error} loading={loading} login={login} />
            )}
          />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/workout" logout={logout} component={Workout} />
          <ProtectedRoute path="/history" logout={logout} component={History} />
          <ProtectedRoute
            path="/progress"
            logout={logout}
            component={Progress}
          />
          <ProtectedRoute path="/records" logout={logout} component={Records} />
          <ProtectedRoute path="/" exact logout={logout} component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
