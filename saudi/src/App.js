import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import {useEffect, useState} from 'react'
import './App.css';
import SellerPage from './components/Seller/SellerPage';
import PrivateRoute from "./components/PrivateRoute";
import HomePage from './components/HomePage';
import ItemCard from './components/ItemCard';
import NavBar from './components/Navbar'
import signupForm from './components/SignUp'

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem('user')) setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  const handleUserObject = user => setUser(user);
  return (
    <Router>
      <div className="App">
        <NavBar user={user}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/seller-page" component={SellerPage} />
          <Route path="/item/:id" component={ItemCard} />
          {/* <Route path='/sign-up' component={signupForm}/> */}
          {/* <Route path='/sign-up' render={props => <signupForm {...props} handleUserObject={handleUserObject} />} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
