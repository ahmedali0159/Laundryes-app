
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from "./components/Home/Navbar/Navbar";
import Login from './components/Login/Login/Login';


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
        </Switch>
   </Router>
   </UserContext.Provider>  
  );
}

export default App;
