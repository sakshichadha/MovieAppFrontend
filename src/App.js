import { React, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPrivateRoute from "./components/routing/UserPrivateRoute";
import AdminPrivateRoute from "./components/routing/AdminPrivateRoute";
import CommonPrivateRoute from "./components/routing/CommonPrivateRoute";
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
import MyTicket from "./components/ticket/MyTicket";
import BookTicket from "./components/ticket/BookTicket";
import MyBuses from "./components/bus/MyBuses";
import UserInfo from "./components/ticket/UserInfo";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import AddBus from "./components/bus/AddBus";
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
          <section className="">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <UserPrivateRoute
                exact
                path="/userDashboard"
                component={UserDashboard}
              />
              <UserPrivateRoute exact path="/findBuses" component={GetBuses} />
              <AdminPrivateRoute exact path="/myBuses" component={MyBuses} />

              <UserPrivateRoute
                exact
                path="/bookTicket"
                component={BookTicket}
              />
              <UserPrivateRoute exact path="/myTickets" component={MyTicket} />
              <CommonPrivateRoute
                exact
                path="/queryResults"
                component={DisplayBuses}
              />
              <AdminPrivateRoute
                exact
                path="/adminDashboard"
                component={AdminDashboard}
              />
              <AdminPrivateRoute
                exact
                path="/ticketInfo"
                component={UserInfo}
              />
              <AdminPrivateRoute exact path="/addBus" component={AddBus} />
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
