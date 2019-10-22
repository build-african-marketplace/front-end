import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';
import SellerPage from './components/Seller/SellerPage';
import PrivateRoute from "./components/PrivateRoute";
import HomePage from './components/HomePage';
import NavBar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" component={HomePage} />
          <PrivateRoute path="/seller-page" component={SellerPage} />
          <Redirect from="/" to="/seller-page" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
