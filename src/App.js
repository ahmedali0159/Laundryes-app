
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddReview from "./components/AddReview/AddReview";
import AddService from "./components/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from './components/Home/Home/Home';
import Navbar from "./components/Home/Navbar/Navbar";
import Login from './components/Login/Login/Login';
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

import NotFound from "./components/NotFound/NotFound";
import OrderPlace from "./components/OrderPlace/OrderPlace";




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path='/home'>
          <Home/>
          </Route> 
          <Route path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/addreview">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/orderplace/:id">
           <OrderPlace></OrderPlace>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
   </Router>
   </UserContext.Provider>  
  );
}

export default App;
