import { React, Fragment,useEffect } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import AdminRegister from "./components/auth/AdminRegister";
import UserRegister from "./components/auth/UserRegister";
import UserLogin from "./components/auth/UserLogin";
import AdminLogin from "./components/auth/AdminLogin"
import "./App.css";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
      <Router>
      <section className="container">
            <Switch>
              <Route exact path="/registerAdmin" component={AdminRegister} />
              <Route exact path="/loginAdmin" component={AdminLogin} />

              <Route exact path="/registerUser" component={UserRegister} />
              <Route exact path="/loginUser" component={UserLogin} />
              </Switch>
</section>
      </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
