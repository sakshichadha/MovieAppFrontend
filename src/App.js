import { React, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPrivateRoute from "./components/routing/UserPrivateRoute";
import AdminPrivateRoute from "./components/routing/AdminPrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import { loadAdmin, loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import AdminRegister from "./components/auth/AdminRegister";
import UserRegister from "./components/auth/UserRegister";
import UserLogin from "./components/auth/UserLogin";
import AdminLogin from "./components/auth/AdminLogin";
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import GetBuses from "./components/bus/GetBuses";
import DisplayBuses from "./components/bus/DisplayBuses";
import BusItem from "./components/bus/BusItem"
import "./App.css";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <section className="container">
            <Switch>
              <UserPrivateRoute
                exact
                path="/userDashboard"
                component={UserDashboard}
              />
              <UserPrivateRoute exact path="/findBuses" component={GetBuses} />
              <UserPrivateRoute exact path="/busItem" component={BusItem} />

              <UserPrivateRoute
                exact
                path="/queryResults"
                component={DisplayBuses}
              />
              <AdminPrivateRoute
                exact
                path="/adminDashboard"
                component={AdminDashboard}
              />
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
